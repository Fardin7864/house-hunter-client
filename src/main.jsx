import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './style.css'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider'
import { router } from './Routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </HelmetProvider>
)
