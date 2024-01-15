import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DetailPage from './Detail/page/DetailPage';
import HealthTest from './HealthTest';
import LecueNotePage from './LecueNote/page/LeceuNotePage';
import Loading from './Login/components/Loading';
import Login from './Login/page';
import Register from './Register/page';
import SelectBookPage from './SelectBook/page/SelectBookPage';
import SplashPage from './Splash/page/SplashPage';
import StickerAttach from './StickerAttach/page';
import StickerPack from './StickerPack/page/StickerPack';
import TargetPage from './Target/page/TargetPage';

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
        <Route path="/target" element={<TargetPage />} />
        <Route path="/test" element={<HealthTest />} />
        <Route path="/sticker-attach" element={<StickerAttach />} />
        <Route path="/select-book" element={<SelectBookPage />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
