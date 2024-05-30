import Carousel from "./Carousel";
import ProductDescription from "./ProductDescription";
import React from "react";

interface ProductPageProps {
  addItem: (item: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }) => void;
  images: string[];
  thumbnails: string[];
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ProductPage: React.FC<ProductPageProps> = ({
  addItem,
  images,
  thumbnails,
  setQuantity,
}) => {
  return (
    <div className="flex flex-col px-3 lg:flex-row lg:items-start lg:py-10 lg:w-2/3 lg:mx-auto lg:px-0 md:px-4">
      <Carousel images={images} thumbnails={thumbnails} />
      <ProductDescription addItem={addItem} setQuantity={setQuantity}/>
    </div>
  );
};

export default ProductPage;
