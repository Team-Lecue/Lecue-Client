export type isValidState = 'valid' | 'special' | 'duplicate' | 'space';

export interface NicknameInputProps {
  nickname: string;
  isValid: string;
  handleSetNickname: (nickname: string) => void;
  handleSetIsActive: (isActive: boolean) => void;
  handleSetIsValid: (isValid: isValidState) => void;
}

export type SubmitButtonProps = {
  token: string;
  nickname: string;
  isActive: boolean;
  isValid: string;
  handleSetIsValid: (isValid: isValidState) => void;
  handleSetIsActive: (isActive: boolean) => void;
};

export interface CheckNicknameProps {
  handleSetNickname: (nickname: string) => void;
  handleSetWordCnt: (wordCnt: number) => void;
  handleSetIsValid: (isValid: isValidState) => void;
  e: React.ChangeEvent<HTMLInputElement>;
}
