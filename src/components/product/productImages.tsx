import { useState } from 'react';

import { ImageNavigationArrow } from './imageNavigationArrows';

import ProductImage1 from '@/assets/images/image-product-1.jpg';
import ProductImage2 from '@/assets/images/image-product-2.jpg';
import ProductImage3 from '@/assets/images/image-product-3.jpg';
import ProductImage4 from '@/assets/images/image-product-4.jpg';
import ProductThumbnail1 from '@/assets/images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from '@/assets/images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from '@/assets/images/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from '@/assets/images/image-product-4-thumbnail.jpg';
import { useProductPage } from '@/contexts/productPageContext';

interface Props {
  isLightbox: boolean;
}

export const ProductImages = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lightboxToggle } = useProductPage();

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

  const changeIndex = (type?: string) => {
    let newIndex = currentIndex + (type === 'next' ? 1 : -1);
    newIndex = newIndex < 0 ? productImages.length - 1 : newIndex;
    newIndex = newIndex > productImages.length - 1 ? 0 : newIndex;
    setCurrentIndex(newIndex);
  };

  const thumbnailStyles =
    'w-[88px] rounded-lg cursor-pointer hover:opacity-40 transition-opacity transition-color';

  return (
    <div className='sm:max-w-md w-full mx-auto'>
      <div
        className={`relative h-[300px] sm:h-[445px] w-full max-sm:overflow-hidden ${
          props.isLightbox ? '' : 'cursor-pointer'
        }`}
        onClick={props.isLightbox ? undefined : lightboxToggle}
      >
        {productImages.map((image, i) => {
          const showCurrentImage = currentIndex === i ? 'opacity-100' : '';

          return (
            <img
              src={image}
              key={i}
              className={`absolute v-align-middle transiton-opacity ease-in duration-500 opacity-0 sm:rounded-2xl ${showCurrentImage}`}
            />
          );
        })}
        <ImageNavigationArrow
          changeIndex={changeIndex}
          isLightbox={props.isLightbox}
        />
      </div>
      <div className='max-sm:hidden flex space-x-8 mt-8'>
        {productThumbnails.map((image, i) => {
          const selectedImageStyles =
            i === currentIndex ? 'border-orange border-2 border-solid' : '';
          return (
            <div key={image} className='bg-white rounded-lg'>
              <img
                src={image}
                className={`${thumbnailStyles} ${selectedImageStyles} `}
                onClick={() => setCurrentIndex(i)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
