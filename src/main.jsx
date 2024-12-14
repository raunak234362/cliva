import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Layout} from './components/index';
import App from './App'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use Layout as the main wrapper
    children: [
      {
        index: true, // Default child route
        element: <Layout />,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
