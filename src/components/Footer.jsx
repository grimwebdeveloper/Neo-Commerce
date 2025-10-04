import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-zinc-800 text-white text-center py-6'>
      <p className='font-semibold'>Copyright &copy; <Link to="/">Neo Commerce</Link> {currentYear} | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
