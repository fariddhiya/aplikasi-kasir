import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from '../api/auth';
import * as RootNavigation from '../RootNavigation';
import createDataContext from './createDataContext';

const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'item_sale':
      return {
        ...state,
        dataItem: action.payload,
        totalPriceSaleItem: action.payload2,
      };
    case 'clear_error':
      return {...state, errorMsg: '', msg: ''};
    case 'list_item':
      return {
        ...state,
        errorMsg: '',
        msg: action.payload2,
        dataItem: action.payload,
      };
    case 'add_error':
      return {...state, errorMsg: action.payload};
    case 'handle_msg':
      return {
        ...state,
        msg: action.payload,
        errorMsg: '',
        price: 0,
      };
    case 'sale_cart':
      return {...state, items: action.payload};
    case 'invoice':
      return {
        ...state,
        dataInvoice: action.payload,
      };
    case 'add_buy_item':
      return {
        ...state,
        dataBuyItem: [
          ...state.dataBuyItem,
          {
            id: action.payload,
            name: action.payload2,
            quantity: action.payload3,
          },
        ],
      };
    case 'delete_buy_item':
      return {
        ...state,
        dataBuyItem: action.payload,
      };
    case 'delete_other_product':
      return {
        ...state,
        dataOtherProduct: action.payload,
      };
    case 'clear_data_shop':
      return {
        price: 0,
        errorMsg: '',
        dataItem: null,
        msg: '',
        items: [],
        dataInvoice: null,
        dataBuyItem: [],
        dataOtherProduct: [],
        totalPriceSaleItem: 0,
        totalOtherProductPrice: 0,
        totalPriceBuyItem: 0,
      };
    case 'amount_other_product':
      return {
        ...state,
        totalOtherProductPrice: action.payload,
      };
    case 'new_other_product':
      return {
        ...state,
        wholeSaleCart: [
          {product: action.payload},
          {otherProduct: action.payload2},
        ],
      };
    case 'add_other_product':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload,
            name: action.payload2,
            price: action.payload3,
            quantity: action.payload4,
          },
        ],
        totalPriceSaleItem:
          state.totalPriceSaleItem + action.payload3 * action.payload4,
      };

    case 'add_item_cart':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload,
            name: action.payload2,
            quantity: action.payload3,
            img: action.payload4,
            price: action.payload5,
          },
        ],
        totalPriceSaleItem: state.totalPriceSaleItem + action.payload5,
        dataItem: state.dataItem.map((value, index) =>
          value.id == action.payload
            ? {
                id: value.id,
                name: value.name,
                image_url: value.image_url,
                price: value.price,
                price_format: value.price_format,
                quantity: value.quantity + 1,
              }
            : value,
        ),
      };

    case 'increment_cart_sale':
      const data = state.items;
      return {
        ...state,
        items: state.items.map((value, index) =>
          value.id == action.payload
            ? {
                id: value.id,
                name: value.name,
                quantity: value.quantity + 1,
                img: value.img,
                price: value.price,
              }
            : value,
        ),
        totalPriceSaleItem: state.totalPriceSaleItem + action.payload2,
        dataItem: state.dataItem.map((value, index) =>
          value.id == action.payload
            ? {
                id: value.id,
                name: value.name,
                price: value.price,
                image_url: value.image_url,
                quantity: value.quantity + 1,
              }
            : value,
        ),
      };

    case 'decrement_cart_sale':
      return {
        ...state,
        items: state.items.map((value, index) =>
          value.id === action.payload
            ? {
                id: value.id,
                name: value.name,
                quantity: value.quantity - 1,
                img: value.img,
                price: value.price,
              }
            : value,
        ),
        totalPriceSaleItem: state.totalPriceSaleItem - action.payload2,
        dataItem: state.dataItem.map((value, index) =>
          value.id === action.payload
            ? {
                id: value.id,
                name: value.name,
                price: value.price,
                image_url: value.image_url,
                quantity: value.quantity - 1,
              }
            : value,
        ),
      };

    case 'refresh_data_sale':
      return {
        ...state,
        totalPriceSaleItem: 0,
        dataItem: null,
        items: [],
        msg: '',
        errorMsg: '',
      };
    case 'clear_data_buyitem':
      return {
        ...state,
        dataBuyItem: [],
      };
    case 'save_data_purchases':
      return {
        ...state,
        dataPurchasesInvoice: {
          total_price: action.payload,
          data: action.payload2,
          id: action.payload4,
        },
        msg: action.payload3,
      };
    default:
      return state;
  }
};

//Clear Error
const clearError = dispatch => async () => {
  dispatch({type: 'clear_error'});
};

//Clear All Data in TransactionStore
const clearData = dispatch => async () => {
  await RootNavigation.reset('MainApp');
  await RootNavigation.navigate('MainApp', {screen: 'Penjualan'});
  dispatch({type: 'clear_data_shop'});
};

const refreshData =
  dispatch =>
  async ({type}) => {
    if (type === 'sale') {
      dispatch({type: 'refresh_data_sale'});
    }
    if (type === 'buyItem') {
      dispatch({type: 'clear_data_buyitem'});
    }
  };

//Adding Item in Sale Cart
const incrementItemCart =
  dispatch =>
  async ({id, name, price, img, cartItems, dataItem}) => {
    const checkId = cartItems.find(index => index.id === id);

    if (!checkId) {
      dispatch({
        type: 'add_item_cart',
        payload: id,
        payload2: name,
        payload3: 1,
        payload4: img,
        payload5: price,
      });
    }
    if (checkId) {
      dispatch({
        type: 'increment_cart_sale',
        payload: id,
        payload2: price,
      });
    }
  };

//Decrement Item in Sale Cart
const decrementItemCart =
  dispatch =>
  async ({id, price, cartItems}) => {
    const checkId = cartItems.find(index => index.id === id);

    if (checkId) {
      dispatch({
        type: 'decrement_cart_sale',
        payload: id,
        payload2: price,
      });
    }
  };

const paymentSale =
  dispatch =>
  async ({items}) => {
    // const data = items;
    // let newData = [];
    // newData = data.map(index => {
    //   const id = index.id;
    //   return `${index.id} ${index.qty}`;
    // });
    // items = {};
    // newData.map(function (x) {
    //   let divider = x.split(' ');
    //   items[divider[0]] = divider[1];
    // });
    // let finalData = {};
    // finalData.items = items;

    let products = items.filter(index => index.category && index.qty > 0);

    products = products.map(index => {
      return `${index.id} ${index.qty}`;
    });

    // const product = {};
    // products.map(x => {
    //   let divider = x.split(' ');
    //   product[divider[0]] = divider[1];
    // });

    items.map(index => {
      return delete index.img;
    });

    let otherProduct = items.filter(index => !index.category && index.qty > 0);

    // otherProduct = items.map(index => {
    //   return {
    //     name: index.name,
    //     price: index.price,
    //     quantity: index.qty,
    //   };
    // });

    const token = await AsyncStorage.getItem('token');
    try {
      const response = await authApi.post(`/api/v1/pay_sales`, items, {
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/json',
        },
      });
      await AsyncStorage.setItem('invoiceSale', JSON.stringify(items));
      await RootNavigation.navigate('InvoiceSale');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: err,
      });
    }
  };

const addOtherSaleCart =
  dispatch =>
  async ({product, otherProduct}) => {
    dispatch({type: 'other_sale_cart', payload: otherProduct});
  };

// const listSaleCart =
//   dispatch =>
//   async ({dataItem}) => {
//     const data = dataItem.filter(index => {
//       return index.qty > 0;
//     });

//     dispatch({type: 'sale_cart', payload: data});
//   };

//Adding New Product in Sale List
const addItemSale =
  dispatch =>
  async ({name, category, price, images}) => {
    if (images) {
      const data = new FormData();
      data.append('name', name);
      data.append('category', category);
      data.append('price', price);
      data.append('image', {
        uri: images,
        name: 'test',
        type: 'image/jpeg',
      });
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await authApi.post('/api/v1/items', data, {
          headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        dispatch({type: 'handle_msg', payload: response.data});
        await RootNavigation.reset('MainApp');
        await RootNavigation.navigate('MainApp', {screen: 'Penjualan'});
      } catch (err) {
        dispatch({
          type: 'add_error',
          payload: err.response.data.message,
        });
      }
    }
    if (!images) {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await authApi.post(
          '/api/v1/items',
          {
            name,
            category,
            price,
          },
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          },
        );
        dispatch({type: 'handle_msg', payload: response.data});
        await RootNavigation.reset('MainApp');
        await RootNavigation.navigate('MainApp', {screen: 'Penjualan'});
      } catch (err) {
        dispatch({
          type: 'add_error',
          payload: err.response.data.message,
        });
      }
    }
  };

//List Item for Sale
const listItemSale = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  try {
    const response = await authApi.get('/api/v1/items', {
      headers: {Authorization: `Basic ${token}`},
    });

    const data = response.data.data.items;
    data.map(index => {
      index.quantity = 0;
    });

    dispatch({type: 'list_item', payload: data, payload2: response.data.code});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err,
    });
  }
};

const deleteItemSale =
  dispatch =>
  async ({id}) => {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await authApi.delete(`/api/v1/items/${id}`, {
        headers: {Authorization: `Basic ${token}`},
      });
      dispatch({type: 'handle_msg', payload: response.data});
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: err,
      });
    }

    await RootNavigation.reset('MainApp');
    await RootNavigation.navigate('MainApp', {screen: 'Penjualan'});
  };

const editItemSale =
  dispatch =>
  async ({id, name, category, price, uri}) => {
    if (!uri) {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await authApi.put(
          `/api/v1/items/${id}`,
          {name: name, category: category, price: price},
          {
            headers: {Authorization: `Basic ${token}`},
          },
        );

        dispatch({type: 'clear_data_shop'});
        await RootNavigation.reset('MainApp');
        await RootNavigation.navigate('MainApp', {screen: 'Penjualan'});
      } catch (err) {
        dispatch({
          type: 'add_error',
          payload: err,
        });
      }
    }
    if (uri) {
      const data = new FormData();
      data.append('name', name);
      data.append('category', category);
      data.append('price', price);
      data.append('image', {
        uri: uri,
        name: 'test',
        type: 'image/jpg',
      });
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await authApi.put(`/api/v1/items/${id}`, data, {
          headers: {
            Authorization: `Basic ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        dispatch({type: 'handle_msg', payload: response.data});

        await RootNavigation.reset('MainApp');
        await RootNavigation.navigate('MainApp', {screen: 'Penjualan'});
      } catch (err) {
        dispatch({
          type: 'add_error',
          payload: err,
        });
      }
    }
  };

const amountOtherProduct =
  dispatch =>
  async ({dataOtherProduct}) => {
    const total = sum(dataOtherProduct, 'price');
    dispatch({type: 'amount_other_product', payload: total});
  };

const deleteBuyItem =
  dispatch =>
  async ({dataBuyItem, id}) => {
    const newData = dataBuyItem.filter(index => {
      return index.id != id;
    });
    dispatch({type: 'delete_buy_item', payload: newData});
  };

const deleteOtherProduct =
  dispatch =>
  async ({dataOtherProduct, id}) => {
    const newData = dataOtherProduct.filter(index => {
      return index.id != id;
    });
    dispatch({type: 'delete_other_product', payload: newData});
  };

const saveOtherProduct =
  dispatch =>
  async ({dataOtherProduct, total_price}) => {
    dataOtherProduct.map(index => {
      return delete index.id;
    });

    let items = dataOtherProduct;
    const otherItems = {items, total_price};
    await RootNavigation.navigate('MainApp', {screen: 'Penjualan'});
    await dispatch({type: 'new_other_product', payload: otherItems});
  };

//Get Invoice in Sale
const invoiceSale = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  const invoiceSale = await AsyncStorage.getItem('invoiceSale');
  const dataInvoiceSale = await JSON.parse(invoiceSale);
  try {
    const response = await authApi.post(`/api/v1/sales`, dataInvoiceSale, {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json',
      },
    });
    dispatch({type: 'invoice', payload: response.data});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: err,
    });
  }
};

const listBuyItem =
  dispatch =>
  async ({id, name, qty}) => {
    dispatch({
      type: 'add_buy_item',
      payload: id,
      payload2: name,
      payload3: qty,
    });
  };

//Adding Other Product to TransactionStore
const addOtherProduct =
  dispatch =>
  async ({id, name, price, quantity}) => {
    dispatch({
      type: 'add_other_product',
      payload: id,
      payload2: name,
      payload3: Number(price),
      payload4: quantity,
    });
  };

//Save buy item for shop API
const saveBuyItemAPI =
  dispatch =>
  async ({dataBuyItem, total_price}) => {
    const token = await AsyncStorage.getItem('token');
    dataBuyItem.map(index => {
      return delete index.id;
    });
    let items = dataBuyItem;
    const data = {items, total_price};
    try {
      const response = await authApi.post(`/api/v1/purchase_orders`, data, {
        headers: {
          Authorization: `Basic ${token}`,
          'Content-Type': 'application/json',
        },
      });

      dispatch({
        type: 'save_data_purchases',
        payload: total_price,
        payload2: dataBuyItem,
        payload3: response.data.code,
        payload4: response.data.data.purchase_orders.id,
      });
      await RootNavigation.navigate('InvoicePurchases');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: err,
      });
    }
  };

export const {Provider, Context} = createDataContext(
  transactionReducer,
  {
    clearError,
    incrementItemCart,
    decrementItemCart,
    addItemSale,
    listItemSale,
    deleteItemSale,
    editItemSale,
    invoiceSale,
    clearData,
    listBuyItem,
    amountOtherProduct,
    deleteBuyItem,
    addOtherProduct,
    paymentSale,
    saveOtherProduct,
    deleteOtherProduct,
    refreshData,
    saveBuyItemAPI,
    addOtherSaleCart,
  },
  {
    price: 0,
    errorMsg: '',
    dataItem: null,
    msg: '',
    items: [],
    dataInvoice: null,
    dataBuyItem: [],
    dataOtherProduct: [],
    totalPriceSaleItem: 0,
    totalOtherProductPrice: 0,
    totalPriceBuyItem: 0,
    wholeSaleCart: [],
    dataPurchasesInvoice: [],
  },
);

const sum = (items, props) => {
  return items.reduce((a, b) => {
    return a + b[props];
  }, 0);
};
