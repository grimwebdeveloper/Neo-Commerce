import { useState } from 'react';
import { CartContext } from './CreateContexts';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [carItems, setCarItems] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const { id, title, price, description, category, image, rating } = product;
    console.log('Add to cart');
  };

  const removeFromCart = (id) => {
    console.log('Remove from cart', id);
  };

  const clearCart = () => {
    console.log('Clear cart');
  };

  const increaseQuantity = (id) => {
    console.log('Increase quantity', id);
  };

  const decreaseQuantity = (id) => {
    console.log('Decrease quantity', id);
  };

  return (
    <CartContext
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;
