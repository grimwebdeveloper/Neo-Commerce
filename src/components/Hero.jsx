const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-banner' style={{ position: 'relative', zIndex: 2 }}>
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href='#featured' className='btn hero-btn scroll-link'>
          explore tours
        </a>
      </div>
    </div>
  );
};

export default Hero;
