import React from "react";

interface QuantityInputProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({quantity, increaseQuantity, decreaseQuantity}) => {

  return (
    <div className="flex items-center justify-between bg-gray-light rounded-lg h-[50px] mb-4 mt-2 md:w-2/3 md:mx-auto ">
      <button onClick={decreaseQuantity} className="ml-5">
        <img src="/assets/icon-minus.svg" alt="minus sign" />
      </button>
      <p className="text-center font-extrabold">{quantity}</p>
      <button onClick={increaseQuantity} className="mr-5">
        <img src="/assets/icon-plus.svg" alt="plus sign" />
      </button>
    </div>
  );
};

export default QuantityInput;
