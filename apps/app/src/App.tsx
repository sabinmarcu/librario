import { ThemeSetProvider } from '@librario/theme';
import { AppBar } from './components/AppBar';
import { AppSidebar } from './components/Sidebar';

function App() {
  return (
    <ThemeSetProvider>
      <AppBar />
      <AppSidebar />
    </ThemeSetProvider>
  );
}

export default App;
