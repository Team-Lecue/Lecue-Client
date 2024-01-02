import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
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
        <Test>TEST</Test>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

const Test = styled.div`
  ${({ theme }) => theme.fonts.Orange};
`;
