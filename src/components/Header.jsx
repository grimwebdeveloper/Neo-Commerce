import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import HeaderContent from './HeaderContent';

const Header = () => {
  return (
    <header className="relative min-h-screen bg-[url('/banner.jpg')] bg-red-400 bg-no-repeat bg-cover bg-bottom">
      <HeaderContent />
      <Navbar />
    </header>
  );
};

export default Header;
