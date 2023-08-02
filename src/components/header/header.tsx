import { Navigation } from '../../components/header/navigation';
import { CartIndicator } from './cartIndicator';
import { Cart } from './cart';
import { User } from '../../components/header/user';

import { Logo, MenuIcon } from '../../assets/icons';

interface MenuProps {
  menuToggle(): any;
  basketQuantity: number;
}

export const Header = (props: MenuProps) => (
  <header className='p-5 flex items-center relative'>
    <button className='mr-4 md:hidden' onClick={props.menuToggle}>
      <MenuIcon />
    </button>
    <Logo />
    <h1 className='sr-only'>sneakers</h1>
    <Navigation menuClose={props.menuToggle} />
    <div className='ml-auto space-x-4 items-center'>
      <CartIndicator basketQuantity={props.basketQuantity} />
      <User />
    </div>
    <Cart basketQuantity={props.basketQuantity} />
  </header>
);
