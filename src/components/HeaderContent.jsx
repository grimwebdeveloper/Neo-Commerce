const HeaderContent = () => {
  return (
    <div className='h-screen grid content-center gap-2 px-4 max-w-screen-xl mx-auto'>
      <div className='text-red-600 font-semibold font-mono pointer-events-none'>#HOT_COLLECTIONS</div>
      <h1>
        <div className='font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl pointer-events-none'>
          LATEST TRENDS
        </div>
        <div className='font-normal text-3xl sm:text-4xl pointer-events-none'>
          NEW ARRIVALS, <br className='sm:hidden' />
          LIMITED TIME OFFERS
        </div>
      </h1>
      <a href='#show-now' className='font-semibold hover:underline'>
        SHOP NOW
      </a>
    </div>
  );
};

export default HeaderContent;
