import { useState } from "react";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-light rounded-lg h-[50px] mb-4 mt-2 ">
      <button onClick={decreaseQuantity} className="ml-5">
        <img src="/assets/icon-minus.svg" alt="minus sign" />
      </button>
      <p className="text-center font-bold">{quantity}</p>
      <button onClick={increaseQuantity} className="mr-5">
        <img src="/assets/icon-plus.svg" alt="plus sign" />
      </button>
    </div>
  );
};

export default QuantityInput;
