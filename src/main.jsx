import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import Authprovider from './AuthProvider/Authprovider.jsx';
import { CartProvider } from './Layouts/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </Authprovider>
  </StrictMode>
);

