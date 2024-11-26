import ExchangeApi from './database.api.js';
import * as types from './database.types.js';

export const setProducts = (products) => {
  return { type: types.SET_PRODUCTS, payload: { products } };
};

export const setImages = (images) => {
  return { type: types.SET_IMAGES, payload: { images } };
};
export const setCurrentProduct = (product) => {
  return { type: types.SET_CURRENT_PRODUCT, payload: { product } };
};
export const setQuickViewProduct = (product) => {
  return { type: types.SET_QUICKVIEW_PRODUCT, payload: { product } };
};

export const getProduct = (collection, id) => async (dispatch) => {
  const api = new ExchangeApi(collection);

  const data = await api.getData(id);

  dispatch(setQuickViewProduct(data));
};
