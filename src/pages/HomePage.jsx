import { useContext, useState } from 'react';
import { ProductContext } from '../context/CreateContexts';
import Product from '../components/Product';

const HomePage = () => {
  const { products, setProducts } = useContext(ProductContext);

  const filterMensClothing = products.filter(product => product.category === `men's clothing`);
  const filterWomenClothing = products.filter(product => product.category === `women's clothing`);
  const filterJewelry = products.filter(product => product.category === `jewelery`);
  const filterElectronics = products.filter(product => product.category === `electronics`);
  console.log(filterElectronics)

  return (
    <div className='py-16'>
      <h2 className='text-center text-3xl sm:text-4xl font-bold pb-16'>
        Explore Our Products
      </h2>

      <div className='flex justify-center items-center gap-8'>
        <div className='bg-black text-white px-4 py-2 font-semibold rounded'>
          All
        </div>
        <div onClick={() => setProducts(filterMensClothing)} className='bg-black text-white px-4 py-2 font-semibold rounded'>
          Men Clothing
        </div>
        <div onClick={() => setProducts(filterWomenClothing)} className='bg-black text-white px-4 py-2 font-semibold rounded'>
          Women Clothing
        </div>
        <div onClick={() => setProducts(filterElectronics)} className='bg-black text-white px-4 py-2 font-semibold rounded'>
          Electronics
        </div>
        <div onClick={() => setProducts(filterJewelry)} className='bg-black text-white px-4 py-2 font-semibold rounded'>
          Jewelry
        </div>
      </div>

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
