import { ProductImages } from './productImages';
import { ProductListing } from './productListing';

interface ProductProps {
  addToBasket: () => void;
  quantityIncrease: () => void;
  quantityDecrease: () => void;
  itemQuantity: number;
}

export const Product = (props: ProductProps) => (
  <main className='lg:flex'>
    <ProductImages />
    <ProductListing
      addToBasket={props.addToBasket}
      quantityIncrease={props.quantityIncrease}
      quantityDecrease={props.quantityDecrease}
      itemQuantity={props.itemQuantity}
    />
  </main>
);
