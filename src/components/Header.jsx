import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HeaderContent from './HeaderContent';

const Header = () => {
  const currentLocation = useLocation();
  const isHome = currentLocation.pathname === '/';
  return (
    <header
      className={`relative ${
        isHome ? 'min-h-screen bg-[url("/banner.jpg")]' : ''
      } bg-red-400 bg-no-repeat bg-cover bg-bottom`}
    >
      {isHome && <HeaderContent />}
      <Navbar />
    </header>
  );
};

export default Header;
