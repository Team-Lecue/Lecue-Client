import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './Router';
import gStyle from './styles/GlobalStyles';
import theme from './styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
      retry: 0,
    },
  },
});

function App() {
  return (
    <Wrapper>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global styles={gStyle} />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: none;
  background-color: '#F5F5F5';
  min-height: calc(var(--vh, 1vh) * 100);
`;

export default App;
