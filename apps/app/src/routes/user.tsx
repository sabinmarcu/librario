import { Typography } from '@librario/ui';
import type { RouteObject } from 'react-router-dom';
import { LentList } from '@librario/user-interactions';
import { IsUserRoute } from '../components/routes/IsUserRoute';

export const TestRoute = () => (
  <Typography variant="h1" color="success">
    Test Route
  </Typography>
);
export const userRoutes = [
  {
    path: '/app',
    element: <IsUserRoute />,
    children: [
      {
        path: 'lendings',
        element: <LentList />,
      },
    ],
  },
] satisfies RouteObject[];
