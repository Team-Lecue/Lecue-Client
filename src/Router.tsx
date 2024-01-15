import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreateBook from './CreateBook/page';
import DetailPage from './Detail/page/DetailPage';
import HealthTest from './HealthTest';
import LecueNotePage from './LecueNote/page/LeceuNotePage';
import Login from './Login/page';
import Register from './Register/page';
import SplashPage from './Splash/page/SplashPage';
import StickerPack from './StickerPack/page/StickerPack';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="create-note" element={<LecueNotePage />} />
        <Route path="/sticker-pack" element={<StickerPack />} />
        <Route path="/lecue-book" element={<DetailPage />} />
        <Route path="/test" element={<HealthTest />} />
        <Route path="/create-book" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
