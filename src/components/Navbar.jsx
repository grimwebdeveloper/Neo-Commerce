import { pageLinks, socialLinks } from '../data';
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
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className='scroll-link nav-link'>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className='nav-icons'>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target='_blank' className='nav-icon'>
                <i className={link.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
