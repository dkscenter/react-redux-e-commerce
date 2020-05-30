import React, { Component } from "react";
import {
  Button
} from 'reactstrap';
import { connect } from "react-redux";
import { checkoutInCart } from "../redux/actions/shopAction";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import UserComponent from './UserComponent';

class CartComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalPrice: props.shop.totalPrice,
      cartData: props.shop.cart
    }
  }

  componentDidMount() {
    this.validateToken()
  }

  componentDidUpdate() {
    this.validateToken()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cartData: nextProps.shop.cart,
      totalPrice: nextProps.shop.totalPrice
    })
  }

  validateToken = () => {
    if(!this.props.auth.token) this.props.history.push("/login")
  }

  handleCheckout = () => {
    this.props.checkoutInCart()
  }

  shopRender = (item, index) => {
    return (
      <div 
        className='cart-product m-1' 
        key={`cart-product-${index}`}
      >
        <img className='product-img' src={item.img} />
        <div className='text-left p-2'>
          <div className='d-flex align-items-center mb-2'>
            <b>Product: </b>
            <label className='product-desc mb-0 ml-1'>{item.name}</label>
          </div>
          <div>
            <b>Price:</b>
            <label className='ml-1'>{`฿${item.price}`}</label>
          </div>
          <div>
            <b>Item:</b>
            <label className='ml-1'>{`1`}</label>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { cartData, totalPrice } = this.state

    return (
      <div className='cart p-3'>
        <div className={cartData.length > 0 ? 'cart-summary m-1 p-2' : 'd-none'}>
          <h3 className='bg-primary m-0'>My Cart</h3>
        </div>
        <div className={cartData.length > 0 ? 'd-flex' : 'd-none'}>
          <div className='mr-2'>{cartData.map(this.shopRender)}</div>
          <div className='cart-summary text-center m-1 p-3 h-210'>
            <h4 className='bg-primary'>Summary</h4>
            <h4>{`฿${totalPrice}`}</h4>
            <div className='cart-action'>
              <Button className='mt-3' block color="primary" outline onClick={this.handleCheckout}>Clear Cart</Button>
              <Button block color="primary" onClick={this.handleCheckout}>Checkout</Button>
            </div>
          </div>
        </div>
        <div className={cartData.length === 0 ? 'cart-summary p-3 mt-3 m-1 text-center' : 'd-none'}>
          <h5>My Cart is empty</h5>
          <Button className='mt-3' block color="primary" onClick={() => this.props.history.push('/shop')}>Back to Shop</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ shop, auth }) => {
  return {
    shop,
    auth
  };
};

const mapDispatchToProps = {
  checkoutInCart
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartComponent)
)