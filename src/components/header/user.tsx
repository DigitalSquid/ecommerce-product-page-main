import Avatar from '@/assets/images/image-avatar.png';

export const User = () => (
  <div className='inline-block align-middle'>
    <a href='#'>
      <img
        src={Avatar}
        alt='User avatar'
        className='h-7 sm:h-14 border-white border-2 rounded-full transition-colors hover:border-orange active:border-orange'
      />
    </a>
  </div>
);
