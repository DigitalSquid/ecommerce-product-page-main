import { CartItems } from './cartItems';

import { useHeader } from '@/contexts/headerContext';
import { useProductPage } from '@/contexts/productPageContext';

export const Cart = () => {
  const { cartVisibility } = useHeader();
  const { cartQuantity } = useProductPage();

  const cartContainerStyles =
    'absolute top-full right-0 left-0 m-2 bg-white rounded-lg cursor-pointer divide-y z-20 sm:w-[360px] sm:left-auto sm:shadow-xl sm:m-0 sm:-right-[7%] sm:top-[90%] ' +
    cartVisibility;
  const cartTitleStyles = 'px-6 py-4 text-veryDarkBlue font-bold text--[14px]';
  const cartItemWrapperStyles =
    'px-6 py-4 sm:p-6 min-h-[190px] flex flex-col justify-center';

  return (
    <div className={cartContainerStyles}>
      <p className={cartTitleStyles}>Cart</p>
      <div className={cartItemWrapperStyles}>
        {cartQuantity > 0 ? (
          <CartItems />
        ) : (
          <p className='text-center font-bold'>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};
