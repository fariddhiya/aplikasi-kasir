import AsyncStorage from '@react-native-async-storage/async-storage';
import {instance} from '../api';
import * as RootNavigation from '../RootNavigation';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'handle_msg':
      return {...state, errorMsg: '', msg: action.payload};
    case 'home_profile':
      return {
        ...state,
        errorMsg: '',
        dataHome: action.payload,
        msg: action.payload2,
      };
    case 'add_profile':
      return {...state, errorMsg: '', profile: action.payload, msg: ''};
    case 'add_error':
      return {...state, errorMsg: action.payload, msg: ''};
    case 'kur_data':
      return {
        ...state,
        kurData: action.payload,
        errorMsg: '',
        msg: action.payload2,
      };
    case 'news_data':
      return {
        ...state,
        newsData: action.payload,
        errorMsg: '',
        msg: action.payload2,
      };
    case 'tips_data':
      return {
        ...state,
        tipsData: action.payload,
        errorMsg: '',
        msg: action.payload2,
      };
    case 'clear_data':
      return {
        errorMsg: '',
        dataHome: [],
        isLoading: '',
        newsData: [],
        kurData: [],
        tipsData: [],
        profile: {},
        msg: '',
      };
    case 'clear_kur':
      return {...state, kurData: null};
    case 'clear_news':
      return {...state, newsData: null};
    case 'clear_tips':
      return {...state, tipsData: null};
    default:
      return state;
  }
};

const clearData = dispatch => async () => {
  await RootNavigation.reset('MainApp');
  dispatch({type: 'clear_data'});
};

const clearNews =
  dispatch =>
  async ({type}) => {
    if (type === 'kur') {
      dispatch({type: 'clear_kur'});
    }
    if (type === 'tips') {
      dispatch({type: 'clear_tips'});
    }
    if (type === 'news') {
      dispatch({type: 'clear_news'});
    }
  };

const signIn =
  dispatch =>
  async ({phone_number}) => {
    try {
      const response = await instance.post(
        '/api/v1/authentications',
        {
          phone_number: phone_number,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch({type: 'handle_msg', payload: response.data.token});
      await RootNavigation.navigate('OTPScreen', {
        token: response.data.token,
        phone: phone_number,
      });
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: err.response.data,
      });
    }
  };

const register =
  dispatch =>
  async ({name, email, phone_number, merchant_name}) => {
    try {
      const response = await instance.post('/api/v1/register', {
        email,
        phone_number,
        name,
        merchant_name,
      });
      dispatch({type: 'handle_msg', payload: response});
      await RootNavigation.navigate('OTPScreen', {
        phone: phone_number,
        token: response.data.token,
      });
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: err.response.data,
      });
    }
  };

const sendOtp =
  dispatch =>
  async ({otp, token, phone_number}) => {
    console.log(otp, token, phone_number);
    try {
      const response = await instance.post(
        '/api/v1/otp',
        {
          otp,
          phone_number,
        },
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        },
      );
      // await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'handle_msg', payload: response.data});
      await RootNavigation.reset('MainApp');
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: err.response.data,
      });
    }
  };

const resendOtp =
  dispatch =>
  async ({token, phone_number}) => {
    console.log(token, phone_number);
    try {
      const response = await instance.post(
        '/api/v1/resend_otp',
        {
          phone_number,
        },
        {headers: {Authorization: `Basic ${token}`}},
      );
      // await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'handle_msg', payload: response.data});
    } catch (err) {
      console.log(`${err} resendOTP`);
      dispatch({
        type: 'add_error',
        payload: err.response.data,
      });
    }
  };

const getHomeProfile = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await instance.get('/api/v1/home', {
      headers: {Authorization: `Basic ${token}`},
    });

    await AsyncStorage.setItem('dataProfile', JSON.stringify(response.data));
    dispatch({
      type: 'home_profile',
      payload: response.data,
      payload2: response.data.code,
    });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.response.data.message,
    });
  }
};

const getSettingProfile = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await instance.get('/api/v1/profiles', {
      headers: {Authorization: `Basic ${token}`},
    });
    dispatch({type: 'add_profile', payload: response.data.data.user});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err.response.data.message,
    });
  }
};

const logout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  await dispatch({type: 'clear_data'});
  await RootNavigation.reset('LandingPage');
};

const getNews =
  dispatch =>
  async ({type}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await instance.get(`/api/v1/articles?type=${type}`, {
        headers: {Authorization: `Basic ${token}`},
      });

      if (type === 'kur') {
        await dispatch({
          type: 'kur_data',
          payload: response.data.data.articles,
          payload2: response.data.code,
        });
      }
      if (type === 'news') {
        await dispatch({
          type: 'news_data',
          payload: response.data.data.articles,
          payload2: response.data.code,
        });
      }
      if (type === 'tips') {
        await dispatch({
          type: 'tips_data',
          payload: response.data.data.articles,
          payload2: response.data.code,
        });
      }
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: err.response.data,
      });
    }
  };

const checkAccount =
  dispatch =>
  async ({setMounted}) => {
    setMounted('anjay');
    const token = await AsyncStorage.getItem('token');
    if (token) {
      try {
        const response = await instance.get(`/api/v1/check_token`, {
          headers: {Authorization: `Basic ${token}`},
        });
        await dispatch({type: 'handle_msg', payload: response.data});

        await setTimeout(() => {
          RootNavigation.reset('MainApp');
        }, 1000);
      } catch (err) {
        await setTimeout(() => {
          RootNavigation.reset('LandingPage');
        }, 1000);
        dispatch({
          type: 'add_error',
          payload: err.response.data,
        });
      }
    } else {
      await dispatch({type: 'add_error', payload: 'gaada internet mamang'});
      await setTimeout(() => {
        RootNavigation.reset('LandingPage');
      }, 1000);
    }
  };

const editProfile =
  dispatch =>
  async ({name, merchant_name, email, address}) => {
    const data = {name, email, merchant_name, address};
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await instance.post(
        `/api/v1/profiles`,
        {name, email, merchant_name, address},
        {headers: {Authorization: `Basic ${token}`}},
      );
      await dispatch({type: 'handle_msg', payload: response.data});
      await RootNavigation.resetHome('ProfileScreen');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: err.response.data,
      });
    }
  };

export const {Provider, Context} = createDataContext(
  authReducer,
  {
    signIn,
    register,
    sendOtp,
    resendOtp,
    getHomeProfile,
    getSettingProfile,
    clearData,
    getNews,
    checkAccount,
    logout,
    clearNews,
    editProfile,
  },
  {
    errorMsg: '',
    dataHome: [],
    isLoading: '',
    newsData: null,
    kurData: null,
    tipsData: null,
    profile: {},
    msg: '',
  },
);
