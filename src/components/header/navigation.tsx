import { Close } from '../../assets/icons';

interface NavigationProps {
  menuClose: React.MouseEventHandler<HTMLButtonElement>;
}

const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export const Navigation = (props: NavigationProps) => (
  <nav className='max-[600px]:hidden-menu'>
    <button
      className='absolute left-5 top-7 text-darkGrayishBlue md:hidden'
      onClick={props.menuClose}
    >
      <span className='sr-only'>Close menu</span>
      <Close />
    </button>
    <ul className='bg-white h-screen p-5 pt-20 md:pt-0 text-black font-bold'>
      {menuItems.map((item) => {
        return (
          <li className='py-2' key={item}>
            <a href='#'>{item}</a>
          </li>
        );
      })}
    </ul>
  </nav>
);
