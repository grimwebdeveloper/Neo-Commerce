const Footer = () => {
  return (
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
  )
}

export default Footer