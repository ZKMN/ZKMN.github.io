import { Home } from 'pages';

import { MUIThemeProvider } from 'shared/providers';

import './index.css';

export function App() {
  return (
    <MUIThemeProvider>
      <Home />
    </MUIThemeProvider>
  );
}
