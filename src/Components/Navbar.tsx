import { useState } from "react";

// interface NavbarProps {
//   setIsCartActive: React.Dispatch<React.SetStateAction<boolean>>;
//   cartCount: number;
// }

type Props = {
  cartCount: number;
  handleIsCartActive: () => void;
};

const Navbar = ({ cartCount, handleIsCartActive }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="relative lg:mx-auto lg:w-3/4 lg:border-b-[1px] lg:border-b-gray-neutral lg:border-opacity-40 ">
      <div className="flex items-center justify-between py-5 lg:py-7">
        <div className="flex ">
          <div className="flex  items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="border-neutral-400 flex items-center px-3 py-2 hover:border-neutral-white lg:hidden"
            >
              <svg
                className="relative top-[2px] h-4 w-4 fill-[#68707d] "
                viewBox="0 0 15 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 0h24v4H0V3zm0 7h24v4H0V9zm0 7h24v4H0v15z" />
              </svg>
            </button>

            <img
              src="/assets/logo.svg"
              alt="sneakers logo"
              className=" mr-10 h-[20px] w-[140px] lg:h-[25px] lg:w-[180px]"
            />
          </div>

          <div
            className={`${
              isOpen
                ? "fixed inset-0 z-50 bg-neutral-black bg-opacity-70"
                : "hidden"
            }`}
          >
            <div
              className={`${
                isOpen
                  ? "fixed left-0 top-0 z-50 h-screen w-3/5 bg-neutral-white"
                  : "hidden"
              }`}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute left-6 top-1 mr-4 mt-4 "
              >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#68707d"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>

              <ul className="flex flex-col items-start justify-center space-y-5 px-6 py-20 text-lg font-extrabold">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mr-auto hidden lg:flex lg:ml-5">
          <ul className="flex space-x-4 lg:space-x-8 text-[14px] font-medium text-blue-dark lg:text-[16px]">
            <li className="relative">Collections</li>
            <li className="relative">Men</li>
            <li className="relative">Women</li>
            <li className="relative">About</li>
            <li className="relative">Contact</li>
          </ul>
        </div>

        <div className="ml-auto flex items-center space-x-5 px-6 md:space-x-9">
          <button className="relative " onClick={handleIsCartActive}>
            <img
              src="/assets/icon-cart.svg"
              alt="shopping cart icon"
              className="filter-cart mx-auto h-[20px] w-[23px] lg:h-[24px] lg:w-[25px]"
            />
            {cartCount > 0 && (
              <div className="absolute -top-1 left-3 flex h-[12px] w-[17px] items-center justify-center rounded-md bg-orange-neutral text-[9px] font-bold text-neutral-white">
                {cartCount}
              </div>
            )}
          </button>
          <button className="border-2 border-neutral-white hover:rounded-full hover:border-2 hover:border-orange-neutral ">
            <img
              src="/assets/image-avatar.png"
              alt="profile picture avatar"
              className="w-[26px] lg:w-[50px]"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
