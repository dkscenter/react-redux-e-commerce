export const SET_PRODUCT_STATE = "SET_PRODUCT_STATE"
export const SET_PRODUCT_IN_CART = "SET_PRODUCT_IN_CART"
export const CHECKOUT_IN_CART = 'CHECKOUT_CART'

export const setProductState = (index) => {
  return {
    type: SET_PRODUCT_STATE,
    index
  };
};

export const setProductInCart = (product) => {
  return {
    type: SET_PRODUCT_IN_CART,
    product
  }
}

export const checkoutInCart = () => {
  return {
    type: CHECKOUT_IN_CART
  }
}