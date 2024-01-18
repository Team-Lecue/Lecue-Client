import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Home from '../Home/page';
import SplashPage from '../Splash/page/SplashPage';

function SelectView() {
  const { state } = useLocation();
  const [step, setStep] = useState(state?.step ? state.step : 0);

  const handleStep = (step: number) => {
    setStep(step);
  };

  return step === 0 ? (
    <SplashPage handleStep={handleStep} />
  ) : (
    <Home handleStep={handleStep} />
  );
}

export default SelectView;
