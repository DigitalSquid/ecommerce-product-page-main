import { useState } from 'react';

import { Header } from './components/header/header';
import { Product } from './components/product/product';

import './App.css';

function App() {
  const [wrapperClass, setWrapperClass] = useState('');
  const [basketQuantity, setBasketQuantity] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  const menuToggle = () => {
    setWrapperClass(wrapperClass === '' ? 'nav-open' : '');
  };

  const quantityIncrease = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const quantityDecrease = () => {
    setItemQuantity(itemQuantity > 1 ? itemQuantity - 1 : 0);
  };

  const addToBasket = () => {
    setBasketQuantity(basketQuantity + itemQuantity);
  };

  return (
    <div className={`App ${wrapperClass}`}>
      <Header menuToggle={menuToggle} basketQuantity={basketQuantity} />
      <Product
        addToBasket={addToBasket}
        itemQuantity={itemQuantity}
        quantityIncrease={quantityIncrease}
        quantityDecrease={quantityDecrease}
      />
    </div>
  );
}

export default App;
