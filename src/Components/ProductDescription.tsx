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
    <div className="flex w-full flex-col px-3 lg:mx-auto lg:w-[800px] lg:px-32 lg:py-4 lg:h-[68vh]">
      <h2 className="pt-6 text-[12px] font-bold tracking-widest text-blue-dark">
        SNEAKER COMPANY
      </h2>
      <h1 className="py-2 text-[26px] md:text-3xl font-extrabold lg:text-5xl leading-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="py-2 text-[15px] font-medium leading-6 text-blue-dark ">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="flex items-center space-x-4 py-4 leading-none relative">
        <span className="text-[27px] font-extrabold ">$125.00</span>
        <span className="flex h-[26px] w-[50px] items-center justify-center rounded-md bg-neutral-black text-[16px] font-semibold text-neutral-white">
          50%
        </span>
        <span className="font-bold text-blue-dark line-through absolute sm:left-[245px] ">
          $250.00
        </span>
      </div>

      <div className="lg:justify-content lg:py-14 py-1 lg:flex lg:items-center lg:space-x-4 lg:w-full">
        <QuantityInput
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
        <button
          className=" flex h-[50px] w-full items-center justify-center rounded-lg bg-orange-neutral font-extrabold hover:bg-opacity-70 md:mx-auto md:w-2/3 lg:w-[260px]"
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
          <span className="ml-3">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
