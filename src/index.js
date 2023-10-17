import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));


// dev-m14j8urjp2dns7xe.us.auth0.com
// FmNxaDYRYpYy7qP7Wn02SZgmmLbuqH9z

root.render(
  <Auth0Provider
    domain="dev-m14j8urjp2dns7xe.us.auth0.com"
    clientId="FmNxaDYRYpYy7qP7Wn02SZgmmLbuqH9z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ProductsProvider>
        <FilterProvider>
          <CartProvider>
             <App />
          </CartProvider>
        </FilterProvider>
    </ProductsProvider>
    </Auth0Provider>
    )
