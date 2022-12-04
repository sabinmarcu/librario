import { Typography } from '@librario/ui';
import type { RouteObject } from 'react-router-dom';
import { LoggedInRoute } from '../components/routes/LoggedInRoute';
import { MainListPage } from '../pages/MainList';
import { userRoutes } from './user';

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
        element: <MainListPage />,
      },
      ...userRoutes,
    ],
  },
] satisfies RouteObject[];
