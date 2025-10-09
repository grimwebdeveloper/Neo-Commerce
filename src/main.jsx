import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css';
import App from './App.jsx';
import ProductProvider from './context/ProductContext.jsx';
import CartProvider from './context/CartContext.jsx';
import SidebarProvider from './context/SidebarContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
  // </StrictMode>
);
