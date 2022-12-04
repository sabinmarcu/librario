import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFound';
import { loggedInRoutes } from './loggedIn';
import { loggedOutRoutes } from './loggedOut';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    children: [
      ...loggedOutRoutes,
      ...loggedInRoutes,
    ],
  },
]);
