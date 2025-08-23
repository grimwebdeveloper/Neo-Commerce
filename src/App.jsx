const App = () => {
  return (
    <>
      {/* <!-- header  --> */}
      <header id='home'>
        {/* <!-- navbar --> */}
        <nav className='navbar'>
          <div className='nav-center'>
            {/* <!-- nav header --> */}
            <div className='nav-header'>
              <img src='./images/logo.svg' className='nav-logo' alt='' />
              <button type='button' className='nav-toggle' id='nav-toggle'>
                <i className='fas fa-bars'></i>
              </button>
            </div>
            {/* <!-- end of nav header --> */}
            {/* <!-- nav links --> */}
            <ul className='nav-links' id='nav-links'>
              <li>
                {/* <!-- single link --> */}
                <a href='#home' className='scroll-link nav-link'>
                  home
                </a>
              </li>
              {/* <!-- end of single link --> */}
              {/* <!-- single link --> */}
              <li>
                <a href='#about' className=' scroll-link nav-link'>
                  about
                </a>
              </li>
              {/* <!-- end of single link --> */}
              {/* <!-- single link --> */}
              <li>
                <a href='#services' className='nav-link scroll-link'>
                  services
                </a>
              </li>
              {/* <!-- end of single link --> */}
              {/* <!-- single link --> */}
              <li>
                <a href='#featured' className='nav-link scroll-link'>
                  featured
                </a>
              </li>
              {/* <!-- end of single link --> */}
              {/* <!-- single link --> */}
              <li>
                <a href='#gallery' className='nav-link scroll-link'>
                  gallery
                </a>
              </li>
              {/* <!-- end of single link --> */}
            </ul>
            {/* <!-- end of nav links --> */}
            {/* <!-- nav social media icons --> */}
            {/* <!-- footer icons --> */}
            <ul className='nav-icons'>
              <li>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  className='nav-icon'
                >
                  <i className='fab fa-squarespace'></i>
                </a>
              </li>
              {/* <!-- end of nav social media icons --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- end of navbar --> */}
        {/* <!-- hero component --> */}
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
          <div
            className='hero-banner'
            style={{ position: 'relative', zIndex: 2 }}
          >
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
      </header>
      {/* <!-- end of header  --> */}
      {/* <!-- about section --> */}
      <section className='section' id='about'>
        {/* <!-- title  --> */}
        <div className='section-title'>
          <h2>
            about <span>us</span>
          </h2>
        </div>
        {/* <!-- end of title  --> */}
        {/* <!-- about-center --> */}
        <div className='section-center about-center'>
          {/* <!-- about img wrapper--> */}
          <div className='about-img'>
            <img
              src='./images/about.jpeg'
              className='about-photo'
              alt='awesome beach'
            />
          </div>
          {/* <!-- about info --> */}
          <article className='about-info'>
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href='#' className='btn'>
              read more
            </a>
          </article>
        </div>
      </section>
      {/* <!-- end of about section --> */}
      {/* <!-- services --> */}
      <section className='section services' id='services'>
        {/* <!-- title  --> */}
        <div className='section-title'>
          <h2>
            our <span>services</span>
          </h2>
        </div>
        {/* <!-- end of title  --> */}
        <div className='section-center services-center'>
          {/* <!-- single service --> */}
          <article className='service'>
            <span className='service-icon'>
              <i className='fas fa-wallet fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>saving money</h4>
              <p className='service-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
          {/* <!-- end of single service --> */}
          {/* <!-- single service --> */}
          <article className='service'>
            <span className='service-icon'>
              <i className='fas fa-tree fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>endless hiking</h4>
              <p className='service-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
          {/* <!-- end of single service --> */}
          {/* <!-- single service --> */}
          <article className='service'>
            <span className='service-icon'>
              <i className='fas fa-socks fa-fw'></i>
            </span>
            <div className='service-info'>
              <h4 className='service-title'>amazing comfort</h4>
              <p className='service-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
          {/* <!-- end of single service --> */}
        </div>
      </section>
      {/* <!-- end of services --> */}
      {/* <!-- featured tours --> */}
      <section className='section' id='featured'>
        {/* <!-- title  --> */}
        <div className='section-title'>
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
        {/* <!-- end of title  --> */}
        {/* <!-- featured-center --> */}
        <div className='section-center featured-center '>
          {/* <!-- single tour --> */}
          <article className='tour-card'>
            <div className='tour-img-container'>
              <img src='./images/tour-1.jpeg' className='tour-img' alt='' />
              <p className='tour-date'>august 26th, 2020</p>
            </div>
            {/* <!-- tour info --> */}
            <div className='tour-info'>
              <div className='tour-title'>
                <h4>Tibet Adventure</h4>
                <p>6 days</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              {/* <!-- tour footer --> */}
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{' '}
                  china
                </p>
                <p>from $2100</p>
              </div>
            </div>
          </article>
          {/* <!-- end of single tour --> */}
          {/* <!-- single tour --> */}
          <article className='tour-card'>
            <div className='tour-img-container'>
              <img src='./images/tour-2.jpeg' className='tour-img' alt='' />
              <p className='tour-date'>october 1th, 2020</p>
            </div>
            {/* <!-- tour info --> */}
            <div className='tour-info'>
              <h4>best of java</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              {/* <!-- tour footer --> */}
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{' '}
                  indonesia
                </p>
                <p>11 days</p>
                <p>from $1400</p>
              </div>
            </div>
          </article>
          {/* <!-- end of single tour --> */}
          {/* <!-- single tour --> */}
          <article className='tour-card'>
            <div className='tour-img-container'>
              <img src='./images/tour-3.jpeg' className='tour-img' alt='' />
              <p className='tour-date'>september 15th, 2020</p>
            </div>
            {/* <!-- tour info --> */}
            <div className='tour-info'>
              <h4>explore hong kong</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              {/* <!-- tour footer --> */}
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{' '}
                  hong kong
                </p>
                <p>8 days</p>
                <p>from $5000</p>
              </div>
            </div>
          </article>
          {/* <!-- end of single tour --> */}
          {/* <!-- single tour --> */}
          <article className='tour-card'>
            <div className='tour-img-container'>
              <img src='./images/tour-4.jpeg' className='tour-img' alt='' />
              <p className='tour-date'>december 5th, 2019</p>
            </div>
            {/* <!-- tour info --> */}
            <div className='tour-info'>
              <h4>kenya highlights</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              {/* <!-- tour footer --> */}
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{' '}
                  kenya
                </p>
                <p>20 days</p>
                <p>from $3300</p>
              </div>
            </div>
          </article>
          {/* <!-- end of single tour --> */}
        </div>
        {/* <!-- end of tours center --> */}
        <div className='tour-btn'>
          <a href='#' className='btn'>
            all tours
          </a>
        </div>
      </section>
      {/* <!-- end of featured tours --> */}
      {/* <!-- contact --> */}
      <section className='section contact' id='contact'>
        <div className='section-center contact-center'>
          <div className='contact-title'>
            <h3>want latest tour info and updates?</h3>
            <p>Sign up for newsletter and stay up to date</p>
          </div>
          <form className='contact-form'>
            <input
              type='email'
              className='form-control'
              placeholder='your email'
            />
            <button type='submit' className='btn-submit'>
              submit
            </button>
          </form>
        </div>
      </section>
      {/* <!-- end of contact --> */}
      {/* <!-- gallery  --> */}
      <section id='gallery'>
        <div className='gallery-center'>
          {/* <!-- single item --> */}
          <article className='gallery-img-container'>
            <img src='./images/tour-1.jpeg' className='gallery-img' alt='' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </article>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className='gallery-img-container'>
            <img src='./images/tour-2.jpeg' className='gallery-img' alt='' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className='gallery-img-container'>
            <img src='./images/tour-3.jpeg' className='gallery-img' alt='' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className='gallery-img-container'>
            <img src='./images/tour-4.jpeg' className='gallery-img' alt='' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className='gallery-img-container'>
            <img src='./images/tour-5.jpeg' className='gallery-img' alt='' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className='gallery-img-container'>
            <img src='./images/tour-6.jpeg' className='gallery-img' alt='' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className='gallery-img-container'>
            <img src='./images/tour-1.jpeg' className='gallery-img' alt='' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
          {/* <!-- single item --> */}
          <div className='gallery-img-container'>
            <img src='./images/tour-2.jpeg' className='gallery-img' alt='' />
            <a href='#' className='gallery-icon'>
              <i className='fas fa-search'></i>
            </a>
          </div>
          {/* <!-- end of single item --> */}
        </div>
      </section>
      {/* <!-- end of gallery  --> */}

      {/* <!-- footer --> */}
      <footer className='section footer'>
        {/* <!-- footer links --> */}
        <ul className='footer-links'>
          <li>
            <a href='#home' className='footer-link scroll-link'>
              home
            </a>
          </li>
          <a href='#about' className='footer-link scroll-link'>
            about
          </a>
          <a href='#services' className='footer-link scroll-link'>
            services
          </a>
          <a href='#featured' className='footer-link scroll-link'>
            featured
          </a>
          <a href='#gallery' className='footer-link scroll-link'>
            gallery
          </a>
        </ul>
        {/* <!-- footer icons --> */}
        <ul className='footer-icons'>
          {/* <!-- single icon --> */}
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              className='footer-icon'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          {/* <!-- end of single icon --> */}
          <a
            href='https://www.twitter.com'
            target='_blank'
            className='footer-icon'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://www.twitter.com'
            target='_blank'
            className='footer-icon'
          >
            <i className='fab fa-squarespace'></i>
          </a>
        </ul>
        <p className='copyright'>
          copyright &copy; Backroads travel tours company
          <span id='date'></span>. all rights reserved
        </p>
      </footer>
    </>
  );
};

export default App;
