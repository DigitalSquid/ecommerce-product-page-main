import { useState } from 'react';

import { Previous, Next } from '../../assets/icons';
import { ButtonIcon } from '../buttonIcon';

import ProductImage1 from '@/assets/images/image-product-1.jpg';
import ProductImage2 from '@/assets/images/image-product-2.jpg';
import ProductImage3 from '@/assets/images/image-product-3.jpg';
import ProductImage4 from '@/assets/images/image-product-4.jpg';
import ProductThumbnail1 from '@/assets/images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from '@/assets/images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from '@/assets/images/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from '@/assets/images/image-product-4-thumbnail.jpg';

export const ProductImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productImages = [
    ProductImage1,
    ProductImage2,
    ProductImage3,
    ProductImage4,
  ];

  const productThumbnails = [
    ProductThumbnail1,
    ProductThumbnail2,
    ProductThumbnail3,
    ProductThumbnail4,
  ];

  // Should be one function/reducer
  const indexDecrement = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? productImages.length - 1 : newIndex);
  };

  const indexIncrement = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex > productImages.length - 1 ? 0 : newIndex);
  };

  return (
    <div className='sm:max-w-md w-full'>
      <div className='relative h-[300px] sm:h-[445px] sm:rounded-2xl w-full overflow-hidden'>
        {productImages.map((image, i) => {
          const showCurrentImage = currentIndex === i ? 'opacity-100' : '';

          return (
            <img
              src={image}
              key={i}
              className={`absolute v-align-middle transiton-opacity ease-in duration-500 opacity-0 ${showCurrentImage}`}
            />
          );
        })}
        <ButtonIcon
          buttonClass='absolute left-4 v-align-middle bg-white w-9 h-9 rounded-full text-center shadow-md sm:hidden'
          handleClick={indexDecrement}
          icon={<Previous svgClass='w-[10px] -mt-[3px] -ml-[2px]' />}
        />
        <ButtonIcon
          buttonClass='absolute right-4 v-align-middle bg-white w-9 h-9 rounded-full text-center shadow-md sm:hidden'
          handleClick={indexIncrement}
          icon={<Next svgClass='w-[10px] -mt-[3px] ml-[2px]' />}
        />
      </div>
      <div className='max-sm:hidden'>
        {productThumbnails.map((image) => (
          <img src={image} key={image} />
        ))}
      </div>
    </div>
  );
};
