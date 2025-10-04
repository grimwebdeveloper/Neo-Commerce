import { useContext } from 'react';
import { ProductContext } from '../context/CreateContexts';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const currentProduct = products.filter((product) => product.id === +id);
  console.log(currentProduct);

  return (
    <>
      {currentProduct.map((product) => {
        const { id, title, price, description, category, image, rating } =
          product;
        console.log(rating);
        return (
          <div className='max-w-screen-xl mx-auto px-4 min-h-screen flex justify-center items-center py-16'>
            <div className='flex flex-col gap-4'>
              <div className='bg-zinc-200/50 rounded'>
                <img
                  src={image}
                  alt={title}
                  className='mx-auto p-12 mb-4'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <h3 className='capitalize text-zinc-600'>{category}</h3>
                <h2 className='text-3xl sm:text-4xl font-bold'>{title}</h2>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <h4 className='line-through text-zinc-400'>
                      Rs. {(price * 88.76 + 700).toFixed(2)}
                    </h4>
                    <h4 className='font-semibold'>
                      Rs. {(price * 88.76).toFixed(2)}
                    </h4>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='text-zinc-600'>{rating.count}+ sold</div>
                    <h5 className='font-semibold'>
                      ⭐{rating.rate.toFixed(2)}
                    </h5>
                  </div>
                </div>
                <hr className='opacity-10' />
                <div className='flex flex-col gap-2'>
                  <h6 className='font-semibold'>Description:</h6>
                  <div>{description}</div>
                </div>
              </div>
              <div className='flex flex-col gap-4 mt-6 sm:flex-row'>
                <button className='bg-black text-white px-4 py-2 font-semibold rounded w-full cursor-pointer'>
                  Add to Cart
                </button>
                <Link
                  to='/'
                  className='bg-black text-white px-4 py-2 font-semibold rounded w-full text-center'
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductPage;
