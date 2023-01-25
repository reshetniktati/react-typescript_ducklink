import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: '/auth',
    element: <Login></Login>

  },
  {
    path: '/register',
    element: <Register></Register>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

reportWebVitals()
