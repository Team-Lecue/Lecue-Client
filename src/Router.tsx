import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Home/page/HomePage';
import Login from './Login/page';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
