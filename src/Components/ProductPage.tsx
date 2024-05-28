import Carousel from "./Carousel";
import ProductDescription from "./ProductDescription";

const ProductPage = ({
  images,
  thumbnails,
}: {
  images: string[];
  thumbnails: string[];
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-7 lg:items-start px-4 lg:px-0">
      <Carousel images={images} thumbnails={thumbnails} />
      <ProductDescription />
    </div>
  );
};

export default ProductPage;
