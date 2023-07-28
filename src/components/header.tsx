import { Navigation } from '../components/navigation';

interface MenuProps {
  menuToggle(): any;
}

export const Header = (props: MenuProps) => (
  <header className='p-5 flex items-baseline'>
    <button className='space-y-[3px] h-4 mr-4' onClick={props.menuToggle}>
      <div className='w-4 h-[3px] bg-gray-600'></div>
      <div className='w-4 h-[3px] bg-gray-600'></div>
      <div className='w-4 h-[3px] bg-gray-600'></div>
    </button>
    <h1>
      <img src='./src/assets/images/logo.svg' alt='Sneakers' />
    </h1>
    <Navigation menuClose={props.menuToggle} />
    <div className='ml-auto flex space-x-4 items-center'>
      <div className='cart'>
        <img src='./src/assets/icons/icon-cart.svg' alt='close' />
      </div>
      <div className='user'>
        <img
          src='./src/assets/images/image-avatar.png'
          alt='User avatar'
          className='h-7 border-white border-2 rounded-full hover:border-orange active:border-orange'
        />
      </div>
    </div>
  </header>
);
