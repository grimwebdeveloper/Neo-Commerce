import logo from '/images/logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          <li>
            <a href='#home' className='scroll-link nav-link'>
              home
            </a>
          </li>
          <li>
            <a href='#about' className=' scroll-link nav-link'>
              about
            </a>
          </li>
          <li>
            <a href='#services' className='nav-link scroll-link'>
              services
            </a>
          </li>
          <li>
            <a href='#featured' className='nav-link scroll-link'>
              featured
            </a>
          </li>
          <li>
            <a href='#gallery' className='nav-link scroll-link'>
              gallery
            </a>
          </li>
        </ul>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
