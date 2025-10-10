import { useEffect, useState } from 'react';
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
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    console.log('Clear cart');
    setCart([]);
  };

  const increaseQuantity = (id) => {
    const cartItem = cart.find((product) => product.id === id);
    addToCart(cartItem);
  };

  const decreaseQuantity = (id) => {
    const cartItem = cart.find((product) => product.id === id);
    if (cartItem) {
      const newCart = cart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
      setCart(newCart);
    }

    if (cartItem.quantity === 1) {
      removeFromCart(id);
    }
  };

  useEffect(() => {
    const newTotal = cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <CartContext
      value={{
        cart,
        total,
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
