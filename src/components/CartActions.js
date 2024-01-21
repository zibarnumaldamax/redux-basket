import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/cartActions';

const CartActions = ({ addItem }) => {
  const handleAddItem = () => {
    const newItemTitle = prompt('Введите название нового товара:');
    if (newItemTitle) {
      addItem({ id: Date.now(), title: newItemTitle, count: 1 });
    }
  };

  return (
    <div>
      <button onClick={handleAddItem}>Добавить новый товар</button>
    </div>
  );
};

const mapDispatchToProps = {
  addItem
};

export default connect(null, mapDispatchToProps)(CartActions);