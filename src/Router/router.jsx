import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Order from '../Pages/Order/Order';
import SignUp from '../Pages/Auth/SignUp';
import Login from '../Pages/Auth/Login';
import Secret from '../Pages/Privet/Secret';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import Cart from '../Pages/Dashboard/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: 'menu',
        element: <Menu></Menu>,
      },
      {
        path: 'order/:category',
        element: <Order></Order>,
      },

      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'secret',
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default router;
