const Hero = () => {
  return (
    <div
      className='hero'
      style={{
        position: 'relative',
        backgroundImage: "url('./images/main.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      ></div>
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
