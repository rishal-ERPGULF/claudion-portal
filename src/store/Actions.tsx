// actions.ts

export const setSelectedProduct = (product: Product) => ({
    type: 'SET_SELECTED_PRODUCT',
    payload: product,
  });
  
  export const setCouponPercent = (percent: number) => ({
    type: 'SET_COUPON_PERCENT',
    payload: percent,
  });

  export const setLoggedIn = (loggedin: boolean) => ({
    type: 'SET_LOGGED_IN',
    payload: loggedin,
  });

  export const setTotal = (total: number) => ({
    type: 'SET_TOTAL',
    payload: total,
  });
  
  export interface Product {
    product: string;
    description: string;
    amount: number;
    amountType: string;
  }
  