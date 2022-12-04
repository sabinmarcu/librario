import type { RouteObject } from 'react-router-dom';
import { LoggedInRoute } from '../components/routes/LoggedInRoute';
import { LoggedInPage } from '../pages/LoggedIn';

export const loggedInRoutes = [
  {
    path: '/app',
    element: <LoggedInRoute />,
    children: [
      {
        path: '/app',
        element: <LoggedInPage />,
      },
    ],
  },
] satisfies RouteObject[];
