import { getProductData } from '../../constants/productData';
import { SET_PRODUCT_STATE, SET_PRODUCT_IN_CART, CHECKOUT_IN_CART } from '../actions/shopAction';

const initialState = {
  data: getProductData(),
  cart: [],
  totalPrice: 0
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
      let sum = 0
      state.cart.push(action.product)
      state.cart.forEach((item) => { sum += item.price })

      return {
        ...state,
        totalPrice: sum
      }
    }

    case CHECKOUT_IN_CART: {
      return {
        ...state,
        ...initialState,
        cart: []
      }
    }
  }
}