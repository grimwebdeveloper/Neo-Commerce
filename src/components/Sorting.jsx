const Sorting = () => {
  return (
    <div className='flex justify-center items-center gap-4 max-w-screen-xl mx-auto px-4 flex-wrap'>
      <div className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'>
        A - Z
      </div>
      <div className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'>
        Z - A
      </div>
      <div className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'>
        High Price
      </div>
      <div className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'>
        Low Price
      </div>
      <div className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'>
        High Rating
      </div>
      <div className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'>
        Low Rating
      </div>
      <div className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'>
        Most Sold
      </div>
      <div className='bg-black text-white px-4 py-2 font-semibold rounded cursor-pointer'>
        Low Sold
      </div>
    </div>
  );
};

export default Sorting;
