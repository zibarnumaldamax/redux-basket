import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import CartList from './components/CartList';
import CartActions from './components/CartActions';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Корзина</h1>
        <CartList />
        <CartActions />
      </div>
    </Provider>
  );
};

export default App;
