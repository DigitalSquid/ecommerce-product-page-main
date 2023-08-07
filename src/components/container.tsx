import { useProductPage } from '@/contexts/productPageContext';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { isNavOpen } = useProductPage();
  const navStyle = isNavOpen ? 'nav-open' : '';

  return (
    <div
      className={`container max-w-6xl sm:px-5 mx-auto sm:divide-y ${navStyle}`}
    >
      {props.children}
    </div>
  );
};
