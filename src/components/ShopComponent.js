import React, { Component } from "react";
import { connect } from "react-redux";
import { setProductState, setProductInCart, checkoutInCart } from "../redux/actions/shopAction";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

class ShopComponent extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      shopData: props.shop.data
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
      shopData: nextProps.shop.data
    })
  }

  validateToken = () => {
    if(!this.props.auth.token) this.props.history.push("/login")
  }

  purchaseProduct = (index) => {
    const { shopData } = this.state

    this.props.setProductState(index)
    this.props.setProductInCart(shopData[index])
  }

  checkout = () => {
    this.props.checkoutInCart()
  }

  shopRender = (item, index) => {
    return (
      <div 
        className='product m-1' 
        key={`product-${index}`}
        onClick={() => this.purchaseProduct(index)}
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
            <b>In Stock:</b>
            <label className='ml-1'>{item.stock}</label>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { shopData } = this.state

    return (
      <div className='shop'> 
        {shopData.map(this.shopRender)}
      </div>
    )
  }
}

ShopComponent.propTypes = {
  shop: PropTypes.shape({
    data: PropTypes.array.isRequired,
    cart: PropTypes.array.isRequired
  }),
  auth: PropTypes.shape({
    token: PropTypes.string,
    isLogin: PropTypes.bool
  }),
  setProductState: PropTypes.func,
  setProductInCart: PropTypes.func,
  checkoutInCart: PropTypes.func
}

const mapStateToProps = ({ shop, auth }) => {
  return {
    shop,
    auth
  };
};

const mapDispatchToProps = {
  setProductState,
  setProductInCart,
  checkoutInCart
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopComponent)
)