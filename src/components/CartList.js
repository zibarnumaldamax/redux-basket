import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const CartList = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems
  };
};

export default connect(mapStateToProps)(CartList);