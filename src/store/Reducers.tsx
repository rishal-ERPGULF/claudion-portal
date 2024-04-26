import { Product } from './Actions';

interface State {
  selectedProduct: Product | null;
  couponPercent: number;
  total: number;
  loggedIn: boolean; // Add loggedIn property to state interface
}

const initialState: State = {
  selectedProduct: null,
  couponPercent: 0,
  loggedIn: false,
  total: 0, 
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_SELECTED_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case 'SET_COUPON_PERCENT':
      return {
        ...state,
        couponPercent: action.payload,
      };
    case 'SET_LOGGED_IN':
      return {
        ...state,
        loggedIn: action.payload,
      };
      case 'SET_TOTAL':
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
