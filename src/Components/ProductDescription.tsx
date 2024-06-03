import QuantityInput from "./QuantityInput";
import { useState } from "react";

interface ProductDescriptionProps {
  addItem: (item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }) => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  addItem,
  setQuantity,
}) => {
  const [quantity, setQuantityLocal] = useState<number>(0);

  const increaseQuantity = () => {
    setQuantityLocal((prev) => prev + 1);
  };

  const decreaseQuantity = () =>
    setQuantityLocal((prev) => (prev > 0 ? prev - 1 : 0));

  const handleAdd = () => {
    const item = {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      quantity: quantity,
      price: 125.0,
    };
    addItem(item);
    setQuantityLocal(0);
  };

  return (
    <div className="flex w-full flex-col px-3 md:mx-auto md:w-[600px] lg:h-[68vh] lg:px-3 lg:py-10 ">
      <div className="flex flex-col lg:mx-auto lg:w-[450px]">
        <h2 className="pt-6 text-[12px] font-bold tracking-widest text-blue-dark md:text-[14px]">
          SNEAKER COMPANY
        </h2>
        <h1 className="py-2 text-[26px] font-extrabold leading-8 md:text-4xl lg:py-4 lg:text-5xl">
          Fall Limited Edition Sneakers
        </h1>
        <p className="py-2 text-[15px] leading-6 text-blue-dark md:text-[16px] lg:leading-8 lg:text-[17px] lg:py-3">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </p>
        <div className="relative flex items-center space-x-4 py-4 leading-none md:justify-center lg:place-content-start lg:py-5">
          <span className="text-[27px] font-extrabold lg:text-[33px] ">
            $125.00
          </span>
          <span className="flex h-[26px] w-[50px] items-center justify-center rounded-md bg-neutral-black text-[16px] font-semibold text-neutral-white lg:h-[30px] lg:w-[59px] lg:text-[18px] ">
            50%
          </span>
          <span className="absolute font-bold text-blue-dark line-through sm:left-[200px] md:left-[400px] lg:-left-4  lg:top-[78px]">
            $250.00
          </span>
        </div>

        <div className="py-1 lg:flex lg:w-full lg:justify-between lg:py-16 lg:space-x-4">
          <QuantityInput
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
          <button
            className=" flex h-[50px] items-center justify-center rounded-lg bg-orange-neutral font-bold shadow-xl shadow-[rgba(255,125,26,.3)] hover:bg-opacity-70 sm:w-full max-lg:mx-auto md:w-2/3 lg:h-[62px] lg:w-[285px] lg:text-[18px]"
            onClick={handleAdd}
          >
            <svg
              width="20"
              height="15"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#000000"
                fill-rule="nonzero"
              />
            </svg>
            <span className="m-3">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
