import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/service',
      element: <Service />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ])

  return <RouterProvider router={router} />
}
