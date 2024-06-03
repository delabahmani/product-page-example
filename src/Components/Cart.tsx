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
    <div className="container mx-auto p-4 sm:p-0 lg:mx-0 lg:p-0">
      <div
        className={`cart fixed top-10 mt-10 h-[270px] max-w-screen-sm rounded-lg bg-neutral-white shadow-2xl sm:absolute sm:mx-auto lg:right-44 lg:top-24 lg:mx-0 lg:mt-0 lg:w-[400px] lg:max-w-full  ${isCartActive ? "" : "hidden"}`}
      >
        <div className="">
          <h3 className="m-4 border-b-[1px] border-b-gray-neutral border-opacity-40 py-4 font-bold">
            Cart
          </h3>
        </div>

        {cart.length === 0 ? (
          <p className="m-4 py-[75px] text-center font-extrabold text-neutral-black text-opacity-60">
            Your cart is empty.
          </p>
        ) : (
          <div className="m-4">
            <div className="cart-active flex w-[300px] items-center lg:mx-auto lg:w-[350px]">
              <img
                src="/assets/image-product-1-thumbnail.jpg"
                alt=""
                className="h-[50px] rounded-md lg:h-[55px]"
              />
              <ul className="flex px-3 lg:w-[350px] lg:px-0 lg:pl-5">
                {cart.map((item) => (
                  <li key={item.id} className="cart-list leading-7">
                    <span className="text-blue-dark ">{item.name}</span>
                    <span className="flex text-blue-dark">
                      ${item.price}.00 x {item.quantity}
                      <span className="ml-3 font-extrabold text-neutral-black">
                        ${item.quantity * item.price}.00
                      </span>
                    </span>
                  </li>
                ))}
                <button
                  className="delete-icon mr-3 lg:pl-8"
                  onClick={clearCart}
                >
                  <img
                    src="/assets/icon-delete.svg"
                    alt=""
                    className="sm:h-4 sm:w-4 lg:h-[17px] lg:w-[16px]"
                  />
                </button>
              </ul>
            </div>
            <span className="m-6 flex items-center justify-center lg:mx-auto lg:w-[350px]">
              <button className="checkout-btn h-14 w-64 rounded-lg bg-orange-neutral font-bold lg:w-[350px]">
                Checkout
              </button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
