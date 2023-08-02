import { useState } from 'react';

import { Plus, Minus, CartIcon } from '../../assets/icons';
import { ButtonIcon } from '../buttonIcon';

interface ProductListingProps {
  addToBasket?: () => void;
  quantityIncrease: () => void;
  quantityDecrease: () => void;
  itemQuantity: number;
}

export const ProductListing = (props: ProductListingProps) => {
  return (
    <article className='p-6'>
      <hgroup>
        <p className='uppercase text-orange font-bold text-xs tracking-widest'>
          Sneaker Company
        </p>
        <h1 className='my-4 text-veryDarkBlue text-[27px] font-bold leading-8'>
          Fall Limited Edition Sneakers
        </h1>
      </hgroup>
      <p className='text-grey text-[15px]'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className='my-6 flex gap-x-4 items-center'>
        <span className='text-[27px] font-bold text-veryDarkBlue'>$125.00</span>
        <span className='text-orange text-[15px] font-bold bg-paleOrange p-2 leading-none rounded-md'>
          50%
        </span>
        <span className='ml-auto font-bold sfsdf text-[15px]'>
          <s>$250.00</s>
        </span>
      </div>
      <div className='bg-lightGrayishBlue rounded-xl py-4 px-6 flex justify-between'>
        <ButtonIcon
          buttonClass=''
          icon={<Minus />}
          handleClick={props.quantityDecrease}
        />
        <span className='font-bold text-veryDarkBlue'>
          {props.itemQuantity}
        </span>
        <ButtonIcon
          buttonClass=''
          icon={<Plus />}
          handleClick={props.quantityIncrease}
        />
      </div>
      <ButtonIcon
        buttonClass='bg-orange w-full text-white font-bold text-center rounded-xl py-4 mt-4 space-x-3'
        icon={<CartIcon svgClass='fill-white h-[16px] -mt-[3px]' />}
        text='Add to cart'
        handleClick={props.addToBasket}
      />
    </article>
  );
};
