import React, { useState, useEffect, useRef } from "react";

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
  const [isCartActive, setIsCartActive] = useState<boolean>(true);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartActive(false);
      }
    };

    if (isCartActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartActive]);

  return (
    <div
      ref={cartRef}
      className={`bg-neutral-white fixed right-0 top-9 mr-10 mt-10 rounded-lg p-4 shadow-lg ${isCartActive ? "" : "hidden"}`}
    >
      <h3 className="text-lg font-bold">Cart</h3>
      <hr className="text-[#f7f8fd] w-full pb-8"/>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
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
