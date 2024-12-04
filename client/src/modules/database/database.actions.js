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
export const setQuickViewCart = (cart) => {
  return { type: types.SET_QUICKVIEW_CART, payload: { cart } };
};
export const setLoggedUser = (user) => {
  return { type: types.SET_LOGGED_USER, payload: { user } };
};

export const getProduct = (collection, id) => async (dispatch) => {
  const api = new ExchangeApi(collection);

  const data = await api.getData(id);

  dispatch(setQuickViewProduct(data));
};

export const updatePassword = async (currentPassword, newPassword) => {
  const api = new ExchangeApi();

  await api.updateUserPassword(currentPassword, newPassword);
};

export const updateData = async (first, last, email, currentPassword) => {
  const api = new ExchangeApi();

  await api.sendVerificationEmail(first, last, email, currentPassword);
};

/* export const changeDataInFirestore = async (firstName, lastName, newEmail) => {
  const api = new ExchangeApi();

  await api.listenForEmailVerification(firstName, lastName, newEmail);
};
 */
