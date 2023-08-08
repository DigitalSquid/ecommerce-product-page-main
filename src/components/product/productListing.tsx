import { Plus, Minus, CartIcon } from '@/assets/icons';
import { ButtonIcon } from '../buttonIcon';
import { ProductDetails } from './productDetails';

import { useProductPage } from '@/contexts/productPageContext';

export const ProductListing = () => {
  const { changeQuantity, addToCart, itemQuantity } = useProductPage();

  return (
    <article className='p-6 sm:p-0 sm:pt-14 sm:max-w-md'>
      <ProductDetails />
      <div className='sm:flex sm:space-x-4'>
        <div className='bg-lightGrayishBlue rounded-xl py-4 px-6 flex justify-between items-center sm:w-1/3 sm:py-0'>
          <ButtonIcon
            buttonClass=''
            icon={<Minus />}
            handleClick={() => changeQuantity('decrement')}
          />
          <span className='font-bold leading-8 text-veryDarkBlue'>
            {itemQuantity}
          </span>
          <ButtonIcon
            buttonClass=''
            icon={<Plus />}
            handleClick={() => changeQuantity('increment')}
          />
        </div>
        <ButtonIcon
          buttonClass='button-orange sm:mt-0 sm:w-2/3'
          icon={<CartIcon svgClass='fill-white -mt-[2px]' />}
          text='Add to cart'
          handleClick={() => addToCart()}
        />
      </div>
    </article>
  );
};
