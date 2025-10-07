import { useContext } from 'react';
import { ProductContext } from '../context/CreateContexts';

const Sorting = () => {
  const { products, setProducts } = useContext(ProductContext);
  const titleAtoZ = () => {
    const sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
    setProducts(sorted);
  };
  const titleZtoA = () => {
    const sorted = [...products].sort((a, b) => b.title.localeCompare(a.title));
    setProducts(sorted);
  };
  const highPriceToLowPrice = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };
  const lowPriceToHightPrice = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };
  const lowRatingToHightRating = () => {
    const sorted = [...products].sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(sorted);
  };
  const highRatingToLowRating = () => {
    const sorted = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(sorted);
  };
  const leastSold = () => {
    const sorted = [...products].sort(
      (a, b) => a.rating.count - b.rating.count
    );
    setProducts(sorted);
  };
  const mostSold = () => {
    const sorted = [...products].sort(
      (a, b) => b.rating.count - a.rating.count
    );
    setProducts(sorted);
  };
  return (
    <div className='flex justify-center items-center gap-4 max-w-screen-xl mx-auto px-4 flex-wrap'>
      <div
        onClick={titleAtoZ}
        className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
      >
        A - Z
      </div>
      <div
        onClick={titleZtoA}
        className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
      >
        Z - A
      </div>
      <div
        onClick={lowPriceToHightPrice}
        className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
      >
        Low Price
      </div>
      <div
        onClick={highPriceToLowPrice}
        className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
      >
        High Price
      </div>
      <div
        onClick={lowRatingToHightRating}
        className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
      >
        Low Rating
      </div>
      <div
        onClick={highRatingToLowRating}
        className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
      >
        High Rating
      </div>
      <div
        onClick={leastSold}
        className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
      >
        Low Sold
      </div>
      <div
        onClick={mostSold}
        className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'
      >
        Most Sold
      </div>
    </div>
  );
};

export default Sorting;
