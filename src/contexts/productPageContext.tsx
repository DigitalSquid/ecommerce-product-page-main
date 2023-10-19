import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

interface ProductPageType {
  cartQuantity: number;
  itemQuantity: number;
  showOverlay: boolean;
  showLightbox: boolean;
  setCartQuantity: Dispatch<SetStateAction<ProductPageType['cartQuantity']>>;
  menuToggle: () => void;
  lightboxToggle: () => void;
  addToCart: () => void;
  removeFromCart: () => void;
  changeQuantity: (type: string) => void;
}

export const ProductPageContext = createContext<ProductPageType | null>(null);

export function useProductPage() {
  const ctx = useContext(ProductPageContext);
  if (!ctx) {
    throw new TypeError('error: useProductPage called out of context');
  }
  return ctx;
}

interface ProductPageProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function ProductPageProvider({
  children,
}: ProductPageProviderProps) {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  const changeQuantity = (type: string) => {
    let newQuantity = 0;
    switch (type) {
      case 'increment':
        newQuantity = itemQuantity + 1;
        break;
      case 'decrement':
        newQuantity = itemQuantity > 1 ? itemQuantity - 1 : 0;
        break;
      default:
        newQuantity = 0;
        break;
    }
    setItemQuantity(newQuantity);
  };

  const addToCart = () => {
    setCartQuantity(cartQuantity + itemQuantity);
    setItemQuantity(0);
  };

  const menuToggle = () => {
    setShowOverlay(!showOverlay);
  };

  const lightboxToggle = () => {
    setShowOverlay(!showOverlay);
    setShowLightbox(!showLightbox);
  };

  const removeFromCart = () => {
    setCartQuantity(0);
  };

  return (
    <ProductPageContext.Provider
      value={{
        cartQuantity,
        itemQuantity,
        showOverlay,
        showLightbox,
        setCartQuantity,
        menuToggle,
        lightboxToggle,
        addToCart,
        removeFromCart,
        changeQuantity,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
}
