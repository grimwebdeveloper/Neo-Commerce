const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-zinc-800 text-white text-center py-6'>
      <p className='font-semibold'>Copyright &copy; Neo Commerce {currentYear} | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
