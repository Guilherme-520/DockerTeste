import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Login from './routes/Login'
import Buscador from './routes/Buscador';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },

  {
    path: "buscador",
    element: <Buscador/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
