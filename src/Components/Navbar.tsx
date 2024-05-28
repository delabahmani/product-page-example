import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative lg:mx-auto lg:w-3/4">
      <div className="flex items-center justify-between py-5">
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center border-neutral-400 px-3 py-2 hover:border-neutral-white"
          >
            <svg
              className="h-4 w-4 fill-[#68707d]"
              viewBox="0 0 15 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 0h24v4H0V3zm0 7h24v4H0V9zm0 7h24v4H0v15z" />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "fixed inset-0 z-50 bg-black bg-opacity-50" : "hidden"
          }`}
        >
          <div
            className={`${
              isOpen
                ? "fixed left-0 top-0 z-50 h-screen w-2/3 bg-white"
                : "hidden"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute left-6 top-1 mr-4 mt-4"
            >
              <img src="/assets/icon-close.svg" alt="X close symbol" />
            </button>

            <ul className="flex flex-col items-start justify-center space-y-4 px-6 py-20 text-lg font-bold">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="mr-auto flex ">
          <img
            src="/assets/logo.svg"
            alt="sneakers logo"
            className="mx-auto mr-10 h-[23px] w-[140px]"
          />

          <div className="hidden lg:flex ">
            <ul className="flex space-x-4 text-lg font-bold">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="ml-auto flex items-center space-x-5 px-6">
          <img
            src="/assets/icon-cart.svg"
            alt="shopping cart icon"
            className="mx-auto h-[20px] w-[23px] lg:h-[25px] lg:w-[28px]"
          />
          <img
            src="/assets/image-avatar.png"
            alt="profile picture avatar"
            className="w-[26px] lg:w-[50px]"
          />
        </div>
      </div>
      <hr className="hidden text-[#f7f8fd] lg:flex lg:w-full" />
    </nav>
  );
};

export default Navbar;
