import ProductImage1 from '../../assets/images/image-product-1.jpg';
import ProductImage2 from '../../assets/images/image-product-2.jpg';
import ProductImage3 from '../../assets/images/image-product-3.jpg';
import ProductImage4 from '../../assets/images/image-product-4.jpg';
import ProductThumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import ProductThumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import ProductThumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import ProductThumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';

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

export const ProductImages = () => (
  <>
    <div className='images'>
      {productImages.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
    <div className='images'>
      {productThumbnails.map((image) => (
        <img src={image} key={image} />
      ))}
    </div>
  </>
);
