import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Account from './pages/account/Account';
import Statement from './pages/statement/Statement';
import TrackTransaction from './pages/track-transaction/Track-Transaction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/signup',
        element: <Signup />
      }, 
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/statement',
        element: <Statement />
      },
      {
        path: '/tracktransaction',
        element: <TrackTransaction />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
