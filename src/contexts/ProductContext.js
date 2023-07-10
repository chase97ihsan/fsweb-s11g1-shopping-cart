import { createContext, useContext } from "react";
import { useState } from "react";
import { data } from "../data";
import { CartContext } from "./CartContext";

export const ProductContext = createContext();
export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const { addItem } = useContext(CartContext);
  return (
    <ProductContext.Provider value={{ products, addItem }}>
      {children}
    </ProductContext.Provider>
  );
};
