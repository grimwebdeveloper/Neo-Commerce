import { useState } from 'react';
import { CartContext } from './CreateContexts';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [carItems, setCarItems] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const { id, title, price, description, category, image, rating } = product;
    const newProduct = { ...product, quantity: 1 };
    const isProductAlreadyInCart = cart.find((product) => product.id === id);
    if (isProductAlreadyInCart) {
      const updatedCart = cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const removeFromCart = (id) => {
    console.log('Remove from cart', id);
  };

  const clearCart = () => {
    console.log('Clear cart');
    setCart([]);
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
        cart,
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
