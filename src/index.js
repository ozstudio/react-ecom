import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-0gmdagqky4jxpvhs.us.auth0.com
//5uw4LayI1k7gXx5FSn2fDKGO46iYEpqq
// test pass:1234 name:sasa

const root = ReactDOM.createRoot(document.getElementById('root'));
const providerConfig = {
    domain: "dev-0gmdagqky4jxpvhs.us.auth0.com",
    clientId: "5uw4LayI1k7gXx5FSn2fDKGO46iYEpqq",
    cacheLocation:'localstorage',
    authorizationParams: {
      redirect_uri: window.location.origin
    },
  };
  



root.render(
    <Auth0Provider {...providerConfig}>
        <UserProvider>
<ProductsProvider>
    <FilterProvider>
        <CartProvider>
             <App /> 
        </CartProvider>
      
    </FilterProvider>

</ProductsProvider>
</UserProvider>
</Auth0Provider>
);
