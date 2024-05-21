import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './Router';
import gStyle from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
            useErrorBoundary: true,
            retry: 0,
          },
        },
      }),
  );

  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty(
      '--app-max-width',
      `${maxWidth}px`,
    );
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

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
