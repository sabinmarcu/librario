import { Typography } from '@librario/ui';
import type { RouteObject } from 'react-router-dom';
import { LoggedInRoute } from '../components/routes/LoggedInRoute';
import { LoggedInPage } from '../pages/LoggedIn';

export const TestRoute = () => (
  <Typography variant="h1" color="success">
    Test Route
  </Typography>
);
export const loggedInRoutes = [
  {
    path: '/app',
    element: <LoggedInRoute />,
    children: [
      {
        path: '/app',
        element: <LoggedInPage />,
      },
      {
        path: 'test',
        element: <TestRoute />,
      },
    ],
  },
] satisfies RouteObject[];
