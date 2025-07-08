"use client";

import { createContext, useState } from "react";
import { ProductList, Cart } from "../Components/Shopping-cart";


type Product = {
  id: number;
  name: string;
  price: number;
};


type CartContextType = {
  cartItems: Product[];
  addItems: (product: Product) => void;
  removeItems: (id: number) => void;
  total: number;
};


const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItems: () => {},
  removeItems: () => {},
  total: 0,
});

export default function CartProvider() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addItems = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItems = (id: number) => {
    setCartItems(cartItems.filter((ele) => ele.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addItems, removeItems, total }}>
      <h1>Shopping Cart</h1>
      <div>
        <ProductList />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export { CartContext };
