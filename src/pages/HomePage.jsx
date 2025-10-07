import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/CreateContexts';
import Product from '../components/Product';
import Sorting from '../components/Sorting';

const HomePage = () => {
  const { products, setProducts, originalProducts } =
    useContext(ProductContext);

  const filterMensClothing = originalProducts.filter(
    (product) => product.category === `men's clothing`
  );
  const filterWomenClothing = originalProducts.filter(
    (product) => product.category === `women's clothing`
  );
  const filterJewelry = originalProducts.filter(
    (product) => product.category === `jewelery`
  );
  const filterElectronics = originalProducts.filter(
    (product) => product.category === `electronics`
  );
  console.log(filterElectronics);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='py-16'>
      <h2 className='text-center text-3xl sm:text-4xl font-bold pb-16'>
        Explore Our Products
      </h2>

      <div className='flex justify-center items-center gap-4 max-w-screen-xl mx-auto p-4 flex-wrap'>
        <div
          onClick={() => setProducts(originalProducts)}
          className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
        >
          All
        </div>
        <div
          onClick={() => setProducts(filterMensClothing)}
          className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
        >
          Men Clothing
        </div>
        <div
          onClick={() => setProducts(filterWomenClothing)}
          className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
        >
          Women Clothing
        </div>
        <div
          onClick={() => setProducts(filterElectronics)}
          className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
        >
          Electronics
        </div>
        <div
          onClick={() => setProducts(filterJewelry)}
          className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
        >
          Jewelry
        </div>
      </div>

      <Sorting />

      <div className='max-w-screen-xl mx-auto px-4 mt-32 grid justify-center gap-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// Men Clothing Jewelry Electronics Women Clothing
