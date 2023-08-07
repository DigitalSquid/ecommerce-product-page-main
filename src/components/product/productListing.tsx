import { Plus, Minus, CartIcon } from '@/assets/icons';
import { ButtonIcon } from '../buttonIcon';
import { ProductDetails } from './productDetails';

import { useProductPage } from '@/contexts/productPageContext';

export const ProductListing = () => {
  const { changeQuantity, addToCart, itemQuantity } = useProductPage();

  return (
    <article className='p-6 sm:p-0 sm:pt-14 sm:max-w-md'>
      <ProductDetails />
      <div className='sm:flex'>
        <div className='bg-lightGrayishBlue rounded-xl py-4 px-6 flex justify-between sm:w-1/2'>
          <ButtonIcon
            buttonClass=''
            icon={<Minus />}
            handleClick={() => changeQuantity('decrement')}
          />
          <span className='font-bold text-veryDarkBlue'>{itemQuantity}</span>
          <ButtonIcon
            buttonClass=''
            icon={<Plus />}
            handleClick={() => changeQuantity('increment')}
          />
        </div>
        <ButtonIcon
          buttonClass='button-orange sm:w-1/2'
          icon={<CartIcon svgClass='fill-white h-[16px] -mt-[3px]' />}
          text='Add to cart'
          handleClick={() => addToCart()}
        />
      </div>
    </article>
  );
};
