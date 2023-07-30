import { ProductImages } from './productImages';
import { ProductDetails } from './productDetails';

export const Product = () => (
  <main className='lg:flex'>
    <ProductImages />
    <ProductDetails />
  </main>
);
