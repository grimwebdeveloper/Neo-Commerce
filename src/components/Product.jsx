import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <Link to={`/product/${id}`} key={id} className='w-72 justify-self-center'>
      <abbr title={description}>
        <div className='h-80 overflow-hidden bg-zinc-200/50 rounded mb-4 hover:bg-zinc-100  hover:shadow-md transition-all duration-300'>
          <img src={image} alt={title} className='h-full w-full object-contain p-12 hover:scale-105 transition-all duration-300' />
        </div>
      </abbr>
      <h2 className='line-clamp-1'>
        <abbr title={title}>{title}</abbr>
      </h2>
      <h3 className='capitalize text-zinc-600'>{category}</h3>
      <div className='flex justify-between items-center'>
        <h4>${price}</h4>
        <h5>⭐{rating.rate.toFixed(2)}</h5>
      </div>
    </Link>
  );
};

export default Product;
