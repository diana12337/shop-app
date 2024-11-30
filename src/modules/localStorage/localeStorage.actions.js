import * as types from './localStorage.types';

export const createItem =
  (e, currency, amount, date, price, id) => (dispatch, getState) => {
    e.preventDefault();

    const newItem = {
      id: id,
      currency: currency,
      amount: parseFloat(amount).toFixed(2),
      date: date,
      price: parseFloat(price).toFixed(2),
    };
    dispatch(setItem(newItem));
  };

export const updateCurrencies = (currencies) => {
  return { type: types.UPDATE_CURRENCIES, payload: { currencies } };
};
export const setInput = (name, value) => {
  return { type: types.SET_INPUT, payload: { name, value } };
};

export const setItems = (items) => {
  return { type: types.SET_ITEMS, payload: { items } };
};
export const setError = (name, error) => {
  return { type: types.SET_ERROR, payload: { name, error } };
};
export const hideList = () => {
  return { type: types.HIDE_LIST };
};

export const showList = (name) => {
  return { type: types.SHOW_LIST, payload: { name } };
};
export const setItem = (item) => {
  return { type: types.SET_ITEM, payload: { item } };
};
export const setHistoryCurrency = (rate, currency) => {
  return { type: types.SET_HISTORY_CURRENCY, payload: { rate, currency } };
};
