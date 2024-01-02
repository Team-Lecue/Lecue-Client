import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import gStyle from './styles/GlobalStyles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={gStyle} />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
