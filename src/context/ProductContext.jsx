import { useEffect, useState } from 'react';
import { ProductContext } from './CreateContexts';

const ProductProvider = ({ children }) => {
  // State to store products
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
      setOriginalProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext value={{ products, setProducts, originalProducts }}>
      {children}
    </ProductContext>
  );
};

export default ProductProvider;
