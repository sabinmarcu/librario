import type { RouteObject } from 'react-router-dom';
import { LoggedInRoute } from '../components/routes/LoggedInRoute';
import { MainListPage } from '../pages/MainList';
import { adminRoutes } from './admin';
import { userRoutes } from './user';

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
      ...adminRoutes,
    ],
  },
] satisfies RouteObject[];
