import FirebaseApi from './database.api.js';
import * as types from './database.types.js';

export const setProducts = (products) => {
  return { type: types.SET_PRODUCTS, payload: { products } };
};

export const setCurrentProduct = (product) => {
  return { type: types.SET_CURRENT_PRODUCT, payload: { product } };
};
export const setQuickViewProduct = (product) => {
  return { type: types.SET_QUICKVIEW_PRODUCT, payload: { product } };
};
export const setQuickViewCart = (cart) => {
  return { type: types.SET_QUICKVIEW_CART, payload: { cart } };
};

export const getProduct = (collection, id) => async (dispatch) => {
  const api = new FirebaseApi(collection);

  const data = await api.getData(id);

  dispatch(setQuickViewProduct(data));
};

export const getAllProducts = (collection) => async (dispatch) => {
  const api = new FirebaseApi(collection);
  const data = await api.getAllData();
  dispatch(setProducts(data));
};
export const updatePassword = async (currentPassword, newPassword) => {
  const api = new FirebaseApi();

  await api.updateUserPassword(currentPassword, newPassword);
};

export const updateData = async (
  firstName,
  lastName,
  email,
  currentPassword
) => {
  const api = new FirebaseApi();

  await api.updateUserData(firstName, lastName, email, currentPassword);
};
