import { useState } from 'react';

import { Header } from './components/header/header';
import { Product } from './components/product/product';

import './App.css';

function App() {
  const [wrapperClass, setWrapperClass] = useState('');

  const menuToggle = () => {
    setWrapperClass(wrapperClass === '' ? 'nav-open' : '');
  };

  return (
    <div className={`App ${wrapperClass}`}>
      <Header menuToggle={menuToggle} />
      <Product />
    </div>
  );
}

export default App;
