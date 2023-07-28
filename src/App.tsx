import { useState } from 'react';

import { Header } from './components/header';
import { ProductImages } from './components/productImages';

import './App.css';

function App() {
  const [mainClass, setMainClass] = useState('');

  const menuToggle = () => {
    setMainClass(mainClass === '' ? 'nav-open' : '');
  };

  return (
    <main className={mainClass}>
      <Header menuToggle={menuToggle} />
      <div className='lg:flex'>
        <ProductImages />
        Sneaker Company Fall Limited Edition Sneakers These low-profile sneakers
        are your perfect casual wear companion. Featuring a durable rubber outer
        sole, they’ll withstand everything the weather can offer. $125.00 50%
        $250.00 0 Add to cart
      </div>
    </main>
  );
}

export default App;
