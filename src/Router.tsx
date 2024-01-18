import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorPage from './components/common/ErrorPage';
import CreateBook from './CreateBook/page';
import DetailPage from './Detail/page/DetailPage';
import HealthTest from './HealthTest';
import LecueNotePage from './LecueNote/page/LeceuNotePage';
import LoginCallback from './Login/components/LoginCallback/LoginCallback';
import Login from './Login/page';
import Mypage from './Mypage/page';
import Register from './Register/page';
import SelectBookPage from './SelectBook/page/SelectBookPage';
import SelectView from './SelectView/SelectView';
import StickerAttach from './StickerAttach/page';
import StickerPack from './StickerPack/page/StickerPack';
import TargetPage from './Target/page/TargetPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-note" element={<LecueNotePage />} />
        <Route path="/sticker-pack" element={<StickerPack />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/lecue-book" element={<DetailPage />} />
        <Route path="/target" element={<TargetPage />} />
        <Route path="/test" element={<HealthTest />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/sticker-attach" element={<StickerAttach />} />
        <Route path="/select-book" element={<SelectBookPage />} />
        <Route path="/loading" element={<LoginCallback />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
