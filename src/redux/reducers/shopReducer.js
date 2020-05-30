import { getProductData } from '../../constants/productData';
import { SET_PRODUCT_STATE, SET_PRODUCT_IN_CART, CHECKOUT_IN_CART } from '../actions/shopAction';

const initialState = {
  data: getProductData(),
  cart: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    default: {
      return {
        ...state
      }
    }

    case SET_PRODUCT_STATE: {
      return {
        ...state,
        data: state.data.map((item, index) => (
          index === action.index && item.stock > 0 ? { ...item, stock: item.stock - 1 } : item
        ))
      }
    }

    case SET_PRODUCT_IN_CART: {
      return {
        ...state,
        cart: [
          ...state.cart,
          action.product
        ]
      }
    }

    case CHECKOUT_IN_CART: {
      return {
        ...initialState
      }
    }
  }
}