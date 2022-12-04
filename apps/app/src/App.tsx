import { ThemeSetProvider } from '@librario/theme';
import {
  RouterProvider,
} from 'react-router-dom';
import { router } from './routes/index';

function App() {
  return (
    <ThemeSetProvider>
      <RouterProvider router={router} />
    </ThemeSetProvider>
  );
}

export default App;
