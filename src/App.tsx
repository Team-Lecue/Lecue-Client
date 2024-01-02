import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './Router';
import gStyle from './styles/GlobalStyles';
import theme from './styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={gStyle} />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
