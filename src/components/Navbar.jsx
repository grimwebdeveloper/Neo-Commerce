import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setIsNavbarActive(true);
      } else {
        setIsNavbarActive(false);
      }
    });
  });

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-700 ${isNavbarActive && 'bg-white shadow'
        }`}
    >
      <div className='max-w-screen-xl mx-auto p-4 h-20 flex items-center justify-between'>
        <Link to='/'>
          <i className='ri-shopping-cart-line text-4xl flex items-center'>
            <div className='text-2xl italic font-mono'>NEOKART</div>
          </i>
        </Link>
        <i class='ri-shopping-bag-line text-4xl relative cursor-pointer'>
          <div className='absolute -right-1 -bottom-2 text-sm bg-red-600 text-white rounded-full h-6 w-6 flex justify-center items-center'>
            0
          </div>
        </i>
      </div>
    </nav>
  );
};

export default Navbar;
