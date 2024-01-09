import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Home/page/HomePage';
import Register from './Register/page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
