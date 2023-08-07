import { CartIcon } from '@/assets/icons';

import { useHeader } from '@/contexts/headerContext';
import { useProductPage } from '@/contexts/productPageContext';

export const CartIndicator = () => {
  const { toggleCart } = useHeader();
  const { cartQuantity } = useProductPage();

  const cartQuantityStyles =
    'absolute text-[9px] -top-[6px] -right-[4px] bg-orange font-bold text-white px-[6px] rounded-full';

  return (
    <div
      className='inline-block align-middle relative'
      onClick={() => toggleCart()}
    >
      <CartIcon svgClass='transition-colors hover:text-black' />
      {cartQuantity > 0 && (
        <span className={cartQuantityStyles}>{cartQuantity}</span>
      )}
    </div>
  );
};
