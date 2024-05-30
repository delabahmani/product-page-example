import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  clearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, clearCart }) => {
  const [isCartActive, setIsCartActive] = useState(true);

  return (
    <div
      className={`bg-neutral-white fixed right-0 top-10 mr-10 mt-10 w-[310px] h-[260px] rounded-lg p-4 shadow-lg ${isCartActive ? "" : "hidden"}`}
    >
      <h3 className="ml-2 font-bold border-b-[1px] border-b-gray-neutral border-opacity-40 py-4">Cart</h3>

      {cart.length === 0 ? (
        <p className="font-extrabold text-neutral-black text-opacity-60 text-center py-[75px]">Your cart is empty.</p>
      ) : (
        <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between font-semibold">
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </li>
          ))}
        </ul>
        <button className="absolute bottom-2 right-2" onClick={clearCart}>
          <img src="/assets/icon-delete.svg" alt="" className="h-6 w-6" />
        </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
