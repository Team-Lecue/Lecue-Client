import * as Sentry from '@sentry/react';
import { AxiosError } from 'axios';
import { Suspense } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoundaryErrorPage from './components/common/BoundaryErrorPage';
import ClearToken from './components/common/ClearToken/ClearToken';
import ErrorPage from './components/common/ErrorPage';
import LoadingPage from './components/common/LoadingPage';
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
  interface fallbackProps {
    error: Error;
    componentStack: string;
    eventId: string;
    resetError: () => void;
  }

  function fallback(fallback: fallbackProps) {
    const { error, resetError } = fallback;
    if (
      error instanceof AxiosError &&
      (error.response?.status === 401 || error.response?.status === 403)
    ) {
      return <Login />;
    }
    return <BoundaryErrorPage resetError={resetError} />;
  }

  return (
    <BrowserRouter>
      <Sentry.ErrorBoundary fallback={fallback}>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<SelectView />} />
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
            <Route
              path="/sticker-attach/:bookUuid"
              element={<StickerAttach />}
            />
            <Route path="/select-book" element={<SelectBookPage />} />
            <Route path="/loading" element={<LoginCallback />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/loading-page" element={<LoadingPage />} />
            <Route path="/clear" element={<ClearToken />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Sentry.ErrorBoundary>
    </BrowserRouter>
  );
}

export default Router;
