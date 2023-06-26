import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './Context/ProductContext';
import SidebarProvider from './Context/SidebarContext';
import CartProvier from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvier>
      <ProductProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvier>
  </SidebarProvider>

);

