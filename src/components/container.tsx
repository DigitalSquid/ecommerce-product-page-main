import { useProductPage } from '@/contexts/productPageContext';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { showOverlay } = useProductPage();
  const overlayStyle = showOverlay ? 'show-overlay' : '';

  return (
    <div className={`container max-w-6xl mx-auto sm:divide-y ${overlayStyle}`}>
      {props.children}
    </div>
  );
};
