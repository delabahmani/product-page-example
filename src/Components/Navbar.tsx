import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between border border-black">
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center border-neutral-400 px-3 py-2 hover:border-white"
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
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
            className="absolute left-5 top-0 mr-4 mt-4"
          >
            <img src="/assets/icon-close.svg" alt="" />
          </button>

          <ul className="flex flex-col items-start px-5 py-20 justify-center space-y-4 font-bold text-lg">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="mr-auto">
        <img
          src="/assets/logo.svg"
          alt=""
          className="mx-auto h-[23px] w-[140px]"
        />
      </div>

      <div className="ml-auto flex items-center space-x-2 py-">
        <img
          src="/assets/icon-cart.svg"
          alt=""
          className="mx-auto h-[20px] w-[20px]"
        />
        <img src="/assets/image-avatar.png" alt="" className="w-[30px]" />
      </div>
    </nav>
  );
};

export default Navbar;
