const Navbar = () => {
  return (
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
  );
};

export default Navbar;
