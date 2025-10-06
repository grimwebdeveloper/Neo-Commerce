import { useContext, useState } from 'react';
import { ProductContext } from '../context/CreateContexts';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const currentProduct = products.filter((product) => product.id === +id);
  console.log(currentProduct);

  const [changeColor, setchangeColor] = useState(0);
  const [changeColorName, setChangeColorName] = useState('Original');

  return (
    <>
      {currentProduct.map((product) => {
        const { id, title, price, description, category, image, rating } =
          product;
        console.log(rating);
        return (
          <div
            key={id}
            className='max-w-screen-xl mx-auto px-4 min-h-screen flex justify-center items-center py-16'
          >
            <div className='flex flex-col gap-4 lg:flex-row lg:gap-16 xl:gap-32'>
              <div className='bg-zinc-200/50 rounded flex justify-center items-center lg:w-1/3'>
                <img
                  src={image}
                  alt={title}
                  className='mx-auto p-12 mb-4'
                  style={{
                    filter: `hue-rotate(${changeColor}deg)`,
                  }}
                />
              </div>
              <div className='flex flex-col gap-4 lg:w-2/3'>
                <h3 className='capitalize text-zinc-600'>{category}</h3>
                <h2 className='text-3xl sm:text-4xl font-bold'>{title}</h2>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <h4 className='line-through text-zinc-400'>
                      Rs. {(price * 88.76 + 2000).toFixed(2)}
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
                <div>
                  <h6 className='font-semibold flex flex-col justify-center gap-4'>
                    <div>
                      Colors:{' '}
                      <span className='font-normal'>{changeColorName}</span>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div
                        onMouseEnter={() => {
                          setchangeColor(0);
                          setChangeColorName('Original');
                        }}
                        className='h-8 w-16 cursor-pointer rounded border border-zinc-300'
                        style={{
                          background: `url(https://thumbs.dreamstime.com/b/transparent-seamless-pattern-background-checkered-simulation-alpha-channel-png-wallpaper-empty-gird-grid-vector-illustration-308566526.jpg)`,
                          backgroundSize: 'cover',
                        }}
                      ></div>
                      <div
                        onMouseEnter={() => {
                          setchangeColor(60);
                          setChangeColorName('Yellow');
                        }}
                        className='h-8 w-16 cursor-pointer bg-yellow-400 rounded'
                      ></div>
                      <div
                        onMouseEnter={() => {
                          setchangeColor(120);
                          setChangeColorName('Green');
                        }}
                        className='h-8 w-16 cursor-pointer bg-green-400 rounded'
                      ></div>
                      <div
                        onMouseEnter={() => {
                          setchangeColor(180);
                          setChangeColorName('Cyan');
                        }}
                        className='h-8 w-16 cursor-pointer bg-cyan-400 rounded'
                      ></div>
                      <div
                        onMouseEnter={() => {
                          setchangeColor(240);
                          setChangeColorName('Blue');
                        }}
                        className='h-8 w-16 cursor-pointer bg-blue-400 rounded'
                      ></div>
                      <div
                        onMouseEnter={() => {
                          setchangeColor(300);
                          setChangeColorName('Magenta');
                        }}
                        className='h-8 w-16 cursor-pointer bg-pink-400 rounded'
                      ></div>
                    </div>
                  </h6>
                </div>
                <hr className='opacity-10 my-4' />
                <div className='flex flex-col gap-2 mb-6'>
                  <h6 className='font-semibold'>Description:</h6>
                  <div>{description}</div>
                </div>
                <div className='flex flex-col gap-4 mt-6 sm:flex-row lg:mt-auto'>
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
          </div>
        );
      })}
    </>
  );
};

export default ProductPage;
