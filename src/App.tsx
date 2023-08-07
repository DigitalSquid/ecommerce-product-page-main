import { Container } from '@/components/container';
import { Header } from '@/components/header/header';
import { ProductImages } from '@/components/product/productImages';
import { ProductListing } from '@/components/product/productListing';

import ProductPageContext from '@/contexts/productPageContext';
import HeaderContext from '@/contexts/headerContext';

import './App.css';

function App() {
  return (
    <ProductPageContext>
      <Container>
        <HeaderContext>
          <Header />
        </HeaderContext>
        <main className='lg:flex sm:py-24 sm:px-12 justify-between'>
          <ProductImages />
          <ProductListing />
        </main>
      </Container>
    </ProductPageContext>
  );
}

export default App;
