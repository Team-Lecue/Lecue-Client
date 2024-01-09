import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SplashPage from './Splash/page/SplashPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
