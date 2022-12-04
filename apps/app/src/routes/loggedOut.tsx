import type { RouteObject } from 'react-router-dom';
import { LoggedOutRoute } from '../components/routes/LoggedOutRoute';
import { LoggedOutPage } from '../pages/LoggedOut';

export const loggedOutRoutes = [
  {
    path: '/',
    element: <LoggedOutRoute />,
    children: [
      {
        path: '/',
        element: <LoggedOutPage />,
      },
    ],
  },
] satisfies RouteObject[];
