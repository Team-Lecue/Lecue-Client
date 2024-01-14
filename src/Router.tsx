import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Home/page/HomePage';
import Register from './Register/page';
import DetailPage from './Detail/page/DetailPage';
import HealthTest from './HealthTest';
import LecueNotePage from './LecueNote/page/LeceuNotePage';
import Login from './Login/page';
import SplashPage from './Splash/page/SplashPage';
import StickerPack from './StickerPack/page/StickerPack';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="create-note" element={<LecueNotePage />} />
        <Route path="/sticker-pack" element={<StickerPack />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/test" element={<HealthTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
