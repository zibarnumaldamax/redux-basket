import React from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount, removeItem } from '../actions/cartActions';

const CartItem = ({ item, increaseCount, decreaseCount, removeItem }) => {
  return (
    <div>
      <p>{item.title}</p>
      <button onClick={() => increaseCount(item.id)}>+</button>
      <span>{item.count}</span>
      <button onClick={() => decreaseCount(item.id)}>-</button>
      <button onClick={() => removeItem(item.id)}>Удалить</button>
    </div>
  );
};

const mapDispatchToProps = {
  increaseCount,
  decreaseCount,
  removeItem
};

export default connect(null, mapDispatchToProps)(CartItem);