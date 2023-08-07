import ProductThumbnail from '@/assets/images/image-product-1-thumbnail.jpg';
import { ButtonIcon } from '../buttonIcon';
import { Delete } from '@/assets/icons';

import { useProductPage } from '@/contexts/productPageContext';

export const CartItems = () => {
  const { cartQuantity, removeFromCart } = useProductPage();
  return (
    <>
      <div className='flex space-x-4'>
        <img
          src={ProductThumbnail}
          alt='Thumbnail Image'
          className='w-[50px] h-[50px] rounded'
        />
        <div>
          <p>Fall Limted Edition Sneakers</p>
          <p>
            $125.00 x {cartQuantity}{' '}
            <span className='font-bold text-black ml-1'>
              ${125 * cartQuantity}.00
            </span>
          </p>
        </div>
        <ButtonIcon icon={<Delete />} handleClick={() => removeFromCart()} />
      </div>
      <button className='button-orange' type='button'>
        Checkout
      </button>
    </>
  );
};
