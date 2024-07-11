import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import BasicRoutes from './Routes/BasicRoutes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'react-photo-view/dist/react-photo-view.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={BasicRoutes} />
        <Toaster/>
      </HelmetProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
