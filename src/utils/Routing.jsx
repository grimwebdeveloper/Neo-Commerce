import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import Notfound from '../pages/Notfound';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routing;
