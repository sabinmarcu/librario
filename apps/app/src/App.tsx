import { ThemeSetProvider } from '@librario/theme';
import {
  RouterProvider,
} from 'react-router-dom';
import { AppBar } from './components/layout/AppBar';
import { AppSidebar } from './components/layout/Sidebar';
import { router } from './routes/index';

function App() {
  return (
    <ThemeSetProvider>
      <AppBar />
      <AppSidebar />
      <RouterProvider router={router} />
    </ThemeSetProvider>
  );
}

export default App;
