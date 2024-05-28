import Navbar from "./Components/Navbar";
import ProductPage from "./Components/ProductPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductPage
        images={[
          "/assets/image-product-1.jpg",
          "/assets/image-product-2.jpg",
          "/assets/image-product-3.jpg",
          "/assets/image-product-4.jpg",
        ]}
        thumbnails={[
          "/assets/image-product-1-thumbnail.jpg",
          "/assets/image-product-2-thumbnail.jpg",
          "/assets/image-product-3-thumbnail.jpg",
          "/assets/image-product-4-thumbnail.jpg",
        ]}
      />
    </div>
  );
};

export default App;
