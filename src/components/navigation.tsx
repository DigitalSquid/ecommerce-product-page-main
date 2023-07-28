interface NavigationProps {
  menuClose: React.MouseEventHandler<HTMLButtonElement>;
}

const menuItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

export const Navigation = (props: NavigationProps) => (
  <nav className='fixed w-[66.67%] top-0 left-0 transition-translate ease-in duration-200 z-10 -translate-x-full'>
    <button
      className='absolute left-5 top-7 text-darkGrayishBlue'
      onClick={props.menuClose}
    >
      <span className='sr-only'>Close menu</span>
      <img src='./src/assets/icons/icon-close.svg' alt='close' />
    </button>
    <ul className='bg-white h-screen p-5 pt-20 text-black font-bold'>
      {menuItems.map((item, index) => {
        return (
          <li className='py-2' key={index}>
            <a href='#'>{item}</a>
          </li>
        );
      })}
    </ul>
  </nav>
);
