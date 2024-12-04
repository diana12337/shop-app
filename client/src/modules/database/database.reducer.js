import * as types from './database.types.js';
const initState = {
  products: [],
  images: '',
  currentProduct: '',
  quickViewProduct: '',
  quickViewCart: '',
  userLogged: '',
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return { ...state, products: action.payload.products };
    case types.SET_IMAGES:
      return { ...state, images: action.payload.images };
    case types.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload.product };
    case types.SET_QUICKVIEW_PRODUCT:
      return { ...state, quickViewProduct: action.payload.product };
    case types.SET_QUICKVIEW_CART:
      return { ...state, quickViewCart: action.payload.cart };
    case types.SET_LOGGED_USER:
      return { ...state, userLogged: action.payload.USER };

    default:
      return state;
  }
};
