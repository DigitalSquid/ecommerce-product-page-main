interface Props {
  basketQuantity: number;
}

export const Cart = (props: Props) => (
  <div className='absolute top-full right-0 left-0 m-2 bg-white rounded-lg divide-y z-20'>
    <p className='px-6 py-4 text-veryDarkBlue font-bold text--[14px]'>Cart</p>
    <div className='px-6 py-4 min-h-[190px] flex'>
      {props.basketQuantity > 0 ? (
        <div className=''>{props.basketQuantity} Items</div>
      ) : (
        <p className='text-center font-bold place-self-center w-full'>
          Your cart is empty.
        </p>
      )}
    </div>
  </div>
);
