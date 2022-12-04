import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/NotFound';
import { RootPage } from '../pages/Root';
import { loggedInRoutes } from './loggedIn';
import { loggedOutRoutes } from './loggedOut';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <RootPage />,
    children: [
      ...loggedOutRoutes,
      ...loggedInRoutes,
    ],
  },
]);
