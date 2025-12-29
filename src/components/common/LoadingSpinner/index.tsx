import * as S from './LoadingSpinner.style';

function LoadingSpinner() {
  return (
    <S.SpinnerWrapper>
      <S.SpinnerTrack viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="rgb(150 150 150 / 10%)"
          strokeWidth="5"
        />
      </S.SpinnerTrack>
      <S.Spinner viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#FF760B"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </S.Spinner>
    </S.SpinnerWrapper>
  );
}

export default LoadingSpinner;

