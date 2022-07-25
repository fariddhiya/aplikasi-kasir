import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from '../api/auth';
import * as RootNavigation from '../RootNavigation';
import createDataContext from './createDataContext';

const reportReducer = (state, action) => {
  switch (action.type) {
    case 'handle_msg':
      return {...state, errorMsg: '', msg: action.payload};
    case 'add_error':
      return {...state, errorMsg: action.payload, msg: ''};
    case 'report_screen':
      return {
        ...state,
        dataReport: action.payload,
        msg: action.payload2,
        errorMsg: '',
      };
    case 'clear_report':
      return {errorMsg: '', msg: '', dataReport: {}};
    case 'detail_transaction':
      return {
        ...state,
        dataDetailTransaction: {
          data: action.payload,
        },
      };
    case 'report_pagination':
      return {
        ...state,
        dataReport: {
          ...state.dataReport,
          data: {
            report: action.payload3,
            chart_data: action.payload2,
            orders: [...state.dataReport.data.orders.concat(action.payload)],
          },
        },
      };
    default:
      return state;
  }
};

const clearData =
  dispatch =>
  async ({type}) => {
    if (type === 'report') {
      dispatch({type: 'clear_report'});
    }
    return true;
  };

const report =
  dispatch =>
  async ({filter, type, page}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await authApi.get(
        `/api/v1/reports?filter=${filter}&type=${type}&page=${page}`,
        {headers: {Authorization: `Basic ${token}`}},
      );

      await dispatch({
        type: 'report_screen',
        payload: response.data,
        payload2: response.data.code,
      });
    } catch (err) {
      await dispatch({type: 'add_error', payload: err.data});
    }
  };

const paginationReport =
  dispatch =>
  async ({filter, type, page}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await authApi.get(
        `/api/v1/reports?filter=${filter}&type=${type}&page=${page}`,
        {headers: {Authorization: `Basic ${token}`}},
      );

      await dispatch({
        type: 'report_pagination',
        payload: response.data.data.orders,
        payload2: response.data.data.chart_data,
        payload3: response.data.data.report,
      });
    } catch (err) {
      await dispatch({type: 'add_error', payload: err.data});
    }
  };

const detailTransaction =
  dispatch =>
  async ({data}) => {
    await dispatch({
      type: 'detail_transaction',
      payload: data,
    });
    await RootNavigation.navigate('DetailTransactionReport');
  };

export const {Provider, Context} = createDataContext(
  reportReducer,
  {
    report,
    clearData,
    detailTransaction,
    paginationReport,
  },
  {
    errorMsg: '',
    msg: '',
    dataReport: {},
    dataDetailTransaction: {},
  },
);
