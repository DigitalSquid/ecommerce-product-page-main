import { Close } from '@/assets/icons';
import { useProductPage } from '@/contexts/productPageContext';

const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export const Navigation = () => {
  const { menuToggle } = useProductPage();
  const menuListStyles =
    'bg-white max-sm:h-screen max-sm:pt-20 max-sm:text-black max-sm:font-bold p-5 sm:py-0 sm:ml-6';
  const listItemStyles =
    'py-2 sm:mx-4 sm:pb-10 sm:pt-0 sm:inline-block sm:text-[15px] border-b-4 border-white hover:border-orange hover:text-black';

  return (
    <nav className='max-sm:hidden-menu'>
      <button
        className='max-sm:absolute left-5 top-7 text-darkGrayishBlue sm:hidden'
        onClick={() => menuToggle()}
      >
        <span className='sr-only'>Close menu</span>
        <Close />
      </button>
      <ul className={menuListStyles}>
        {menuItems.map((item) => {
          return (
            <li className={listItemStyles} key={item}>
              <a href='#'>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
