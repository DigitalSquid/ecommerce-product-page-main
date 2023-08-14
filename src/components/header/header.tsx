import { Navigation } from '@/components/header/navigation';
import { User } from '@/components/header/user';
import { Logo, MenuIcon } from '@/assets/icons';
import { CartIndicator } from './cartIndicator';
import { Cart } from './cart';

import { useProductPage } from '@/contexts/productPageContext';

export const Header = () => {
  const { menuToggle } = useProductPage();

  return (
    <header className='p-5 sm:px-0 sm:pb-0 sm:pt-10 sm:mx-5 flex max-sm:items-center relative'>
      <button
        className='mr-4 sm:hidden'
        onClick={() => menuToggle()}
        aria-label='Open menu'
      >
        <MenuIcon />
      </button>
      <Logo />
      <h1 className='sr-only'>sneakers</h1>
      <Navigation />
      <div className='ml-auto space-x-4 sm:space-x-8 items-center sm:-mt-4'>
        <CartIndicator />
        <User />
      </div>
      <Cart />
    </header>
  );
};
