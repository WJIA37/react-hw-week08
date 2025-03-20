import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
//import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { RouterProvider } from 'react-router-dom';
import router from './router';
import store from './redux/store.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>
  </StrictMode>
)
