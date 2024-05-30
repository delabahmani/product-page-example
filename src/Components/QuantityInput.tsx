import React from "react";

interface QuantityInputProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="mb-4 mt-2 flex h-[50px] items-center justify-between rounded-lg bg-gray-light md:mx-auto md:w-2/3 lg:w-[160px] lg:mb-0 lg:mt-0">
      <button onClick={decreaseQuantity} className="ml-5 h-4 hover:opacity-70">
        <img
          src="/assets/icon-minus.svg"
          alt="minus sign"
          className="filter-quantity "
        />
      </button>
      <p className="text-center font-extrabold">{quantity}</p>
      <button onClick={increaseQuantity} className="mr-5 h-4 hover:opacity-70">
        <img
          src="/assets/icon-plus.svg"
          alt="plus sign"
          className="filter-quantity "
        />
      </button>
    </div>
  );
};

export default QuantityInput;
