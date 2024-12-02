import * as types from './localStorage.types';
const initState = {
  currency: '',
  amount: '',
  date: '',
  price: '',
  items: [],
  errors: {},
  showList: true,
  activeInput: null,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_ITEM:
      return { ...state, items: [...state.items, action.payload.item] };
    case types.SET_ITEMS:
      return { ...state, items: action.payload.items };
    case types.SET_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };
    case types.SET_HISTORY_CURRENCY:
      const { rate } = action.payload;
      return { ...state, price: rate.rates[state.currency] };
    case types.HIDE_LIST:
      return {
        ...state,
        showList: false,
      };
    case types.SHOW_LIST:
      return {
        ...state,
        showList: true,
        activeInput: action.payload.name,
      };
    case types.SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.name]: action.payload.error,
        },
      };

    case types.UPDATE_CURRENCIES:
      const { currencies } = action.payload;

      const updatedItems = state.items.map((item) => {
        return {
          ...item,
          rate: parseFloat(currencies[item.currency]).toFixed(2),
          value: (item.amount * currencies[item.currency]).toFixed(2),
          result: `${parseFloat(
            item.amount * currencies[item.currency] - item.amount * item.price
          ).toFixed(2)}`,
          percentage: `${(
            ((item.amount * currencies[item.currency] -
              item.amount * item.price) /
              (item.amount * item.price)) *
            100
          ).toFixed(2)}%`,
        };
      });

      return { ...state, items: updatedItems };

    default:
      return state;
  }
};
