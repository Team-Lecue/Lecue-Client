import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreateBook from './CreateBook/page';
import DetailPage from './Detail/page/DetailPage';
import HealthTest from './HealthTest';
import Home from './Home/page';
import LecueNotePage from './LecueNote/page/LeceuNotePage';
import LoginCallback from './Login/components/LoginCallback/LoginCallback';
import Login from './Login/page';
import Mypage from './Mypage/page';
import Register from './Register/page';
import SelectBookPage from './SelectBook/page/SelectBookPage';
import SplashPage from './Splash/page/SplashPage';
import StickerAttach from './StickerAttach/page';
import StickerPack from './StickerPack/page/StickerPack';
import TargetPage from './Target/page/TargetPage';

function Router() {
  const [step, setStep] = useState(0);

  const handleStep = (newStep: number) => {
    setStep(newStep);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            step === 0 ? (
              <SplashPage handleStep={handleStep} />
            ) : (
              <Home handleStep={handleStep} />
            )
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-note" element={<LecueNotePage />} />
        <Route path="/sticker-pack" element={<StickerPack />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/lecue-book/:bookUuid" element={<DetailPage />} />
        <Route path="/target" element={<TargetPage />} />
        <Route path="/test" element={<HealthTest />} />
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/sticker-attach" element={<StickerAttach />} />
        <Route path="/select-book" element={<SelectBookPage />} />
        <Route path="/loading" element={<LoginCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
