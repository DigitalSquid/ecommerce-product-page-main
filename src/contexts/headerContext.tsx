import { useState, createContext, useContext } from 'react';

interface HeaderContextType {
  cartVisibility: string;
  toggleCart: () => void;
}

export const HeaderContext = createContext<HeaderContextType | null>(null);

export function useHeader() {
  const ctx = useContext(HeaderContext);
  if (!ctx) {
    throw new TypeError('error: useHeader called out of context');
  }
  return ctx;
}

interface HeaderProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export default function HeaderProvider({ children }: HeaderProviderProps) {
  const [cartVisibility, setCartVisibility] = useState('hidden');

  const toggleCart = () => {
    setCartVisibility(cartVisibility === 'hidden' ? '' : 'hidden');
  };

  return (
    <HeaderContext.Provider
      value={{
        cartVisibility,
        toggleCart,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
