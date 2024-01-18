import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Details from '../Pages/Details/Details';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Dashboard from '../Layouts/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },

  {
    path: 'dashboard',

    element: <Dashboard></Dashboard>,

    children: [],
  },
]);

export default router;
