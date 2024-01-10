import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Home/page/HomePage';
import LecueNotePage from './LecueNote/page/LeceuNotePage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="create-note" element={<LecueNotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
