import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { SupplierForm } from './pages/supplier-form'
import { App } from './app'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <SupplierForm mode="new" />,
      },
      {
        path: '/edit/:id',
        element: <SupplierForm mode="edit" />,
      },
    ],
  },
])
