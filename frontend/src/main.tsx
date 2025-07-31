// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './pages/home/Home'
import Result from './pages/home/Result'
import Centers from './pages/home/centers'
import { StrictMode } from 'react'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Profile from './pages/home/Profile'


const router = createBrowserRouter([
  {
    path: "",
    element: <Login></Login>
  },
  {
    path: "signup",
    element: <Signup></Signup>
  },
  {
    path: "home",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      { path: "result", element: <Result></Result> },
      {
        path: "centers",
        element: <Centers></Centers>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      }
    ],
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
