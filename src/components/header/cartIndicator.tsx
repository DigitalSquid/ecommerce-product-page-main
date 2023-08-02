import { CartIcon } from '../../assets/icons';

interface Props {
  basketQuantity: number;
}

export const CartIndicator = (props: Props) => (
  <div className='inline-block align-middle relative'>
    <CartIcon svgClass='fill-darkGrayishBlue w-[22px]' />
    {props.basketQuantity > 0 && (
      <span className='absolute text-[9px] -top-[6px] -right-[4px] bg-orange font-bold text-white px-[6px] rounded-full'>
        {props.basketQuantity}
      </span>
    )}
  </div>
);
