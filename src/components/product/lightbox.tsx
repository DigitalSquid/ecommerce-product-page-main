import { Close } from '../../assets/icons';
import { ButtonIcon } from '../buttonIcon';
import { ProductImages } from '@/components/product/productImages';

import { useProductPage } from '@/contexts/productPageContext';

export const Lightbox = () => {
  const { lightboxToggle, showLightbox } = useProductPage();
  return (
    <div
      className={`fixed flex top-0 left-0 w-screen h-screen items-center z-10 ${
        showLightbox ? '' : 'hidden'
      }`}
    >
      <div className='mx-auto relative'>
        <ButtonIcon
          buttonClass={`absolute -top-10 right-1 text-white hover:text-orange`}
          handleClick={lightboxToggle}
          icon={<Close svgClass='scale-150 w-4 h-4' />}
        />
        <ProductImages isLightbox={true} />
      </div>
    </div>
  );
};
