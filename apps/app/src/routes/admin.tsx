import type { RouteObject } from 'react-router-dom';
import { IsAdminRoute } from '../components/routes/IsAdminRoute';
import { AddBookPage } from '../pages/AddBook';
import { EditBookPage } from '../pages/EditBook';

export const adminRoutes = [
  {
    path: '/app',
    element: <IsAdminRoute />,
    children: [
      {
        path: 'edit/:isbn',
        element: <EditBookPage />,
      },
      {
        path: 'new',
        element: <AddBookPage />,
      },
    ],
  },
] satisfies RouteObject[];
