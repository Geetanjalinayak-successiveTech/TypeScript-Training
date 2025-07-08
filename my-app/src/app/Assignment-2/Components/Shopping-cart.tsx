"use client";

import { useContext } from "react";
import { CartContext } from "../question-7/page";

export function ProductList() {
  const { addItems } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Watch", price: 2000 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => addItems(item)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export function Cart() {
  const { cartItems, removeItems, total } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              {item.name} - ₹{item.price}
              <button onClick={() => removeItems(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}
