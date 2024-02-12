export type isValidState = 'valid' | 'special' | 'duplicate' | 'space';

export interface NicknameInputProps {
  nickname: string;
  isValid: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsValid: React.Dispatch<React.SetStateAction<isValidState>>;
}

export type SubmitButtonProps = {
  token: string;
  nickname: string;
  isActive: boolean;
  isValid: string;
  setIsValid: React.Dispatch<React.SetStateAction<isValidState>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface CheckNicknameProps {
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  setWordCnt: React.Dispatch<React.SetStateAction<number>>;
  setIsValid: React.Dispatch<React.SetStateAction<isValidState>>;
  e: React.ChangeEvent<HTMLInputElement>;
}
