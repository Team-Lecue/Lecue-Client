import { lazy, Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LoadingSpinner from '../components/common/LoadingSpinner';
import Home from '../Home/page';

const SplashPage = lazy(() => import('../Splash/page/SplashPage'));

function SelectView() {
  const { state } = useLocation();
  const [step, setStep] = useState(state?.step ? state.step : 0);

  const isLogin = sessionStorage.getItem('token');

  sessionStorage.removeItem('name');
  sessionStorage.removeItem('image');

  const handleStep = (step: number) => {
    setStep(step);
  };

  return !isLogin && step === 0 ? (
    <Suspense fallback={<LoadingSpinner />}>
      <SplashPage handleStep={handleStep} />
    </Suspense>
  ) : (
    <Home handleStep={handleStep} />
  );
}

export default SelectView;
