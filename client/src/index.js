import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider} from "@react-oauth/google";
import { AccountProvider } from './context/AccountProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Cid = "831682446816-7ccsikqqpl8e0giofg4s90bvjc6uk1sq.apps.googleusercontent.com"
root.render(
  <React.StrictMode>
  <ChakraProvider>
  <GoogleOAuthProvider clientId={Cid}>
<AccountProvider>

    <App />
</AccountProvider>
  </GoogleOAuthProvider>
  </ChakraProvider>
  </React.StrictMode>
);

