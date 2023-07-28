import { Navigation } from '../../components/header/navigation';
import { Cart } from '../../components/header/cart';
import { User } from '../../components/header/user';

import { Logo, MenuIcon } from '../../assets/icons';

interface MenuProps {
  menuToggle(): any;
}

export const Header = (props: MenuProps) => (
  <header className='p-5 flex items-baseline'>
    <button className='mr-4 md:hidden' onClick={props.menuToggle}>
      <MenuIcon />
    </button>
    <Logo />
    <h1 className='sr-only'>sneakers</h1>
    <Navigation menuClose={props.menuToggle} />
    <div className='ml-auto flex space-x-4 items-center'>
      <Cart />
      <User />
    </div>
  </header>
);
