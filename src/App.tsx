import Navbar from "./Components/Navbar";
import ProductPage from "./Components/ProductPage";
import { useState } from "react";
import Cart from "./Components/Cart";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartActive, setIsCartActive] = useState(false);
  const [quantity, setQuantity] = useState<number>(0);

  const addItem = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      }
      return [...prevCart, item];
    });
    setIsCartActive(true);
    setQuantity(0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleIsCartActive = () => {
    setIsCartActive(!isCartActive);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div>
      <Navbar handleIsCartActive={handleIsCartActive} cartCount={cartCount} />
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
        addItem={addItem}
        setQuantity={setQuantity}
      />

      {isCartActive && (
        <div
          onClick={() => setIsCartActive(false)}
          className="fixed left-0 top-0 h-screen w-screen bg-neutral-white bg-opacity-0"
        >
          <Cart cart={cart} clearCart={clearCart} />
        </div>
      )}
    </div>
  );
};

export default App;
