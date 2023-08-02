import Avatar from '../../assets/images/image-avatar.png';

export const User = () => (
  <div className='inline-block align-middle'>
    <img
      src={Avatar}
      alt='User avatar'
      className='h-7 border-white border-2 rounded-full hover:border-orange active:border-orange'
    />
  </div>
);
