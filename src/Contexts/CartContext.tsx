import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Product = {
  img: string;
  description: string;
  btcPrice: string;
  ethPrice: string;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  getTotalPrice: (currency: 'btc' | 'eth') => number;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);


  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  },[]);


  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  },[cartItems]);


  function addToCart(product: Product) {
    setCartItems(prev => [...prev, product]);
  }


  function removeFromCart(product: Product) {
    setCartItems(prev => prev.filter(item => item.description != product.description))
  }

  function getTotalPrice(currency: 'btc' | 'eth') {
    return cartItems.reduce((total, item) => {
      if(currency === 'btc') {
        return total + parseFloat(item.btcPrice);
      } else {
        return total + parseFloat(item.ethPrice)
      }
    }, 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
