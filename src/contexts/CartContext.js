import { createContext } from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("S11", []);
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };
  const removeItem = (itemm) => {
    // verilen itemi sepete ekleyin
    setCart(cart.filter((item) => item.id !== itemm));
  };
  const checkOut = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, checkOut }}>
      {children}
    </CartContext.Provider>
  );
};
