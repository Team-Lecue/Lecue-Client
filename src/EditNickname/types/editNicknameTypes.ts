export type isValidState =
  | 'valid'
  | 'special'
  | 'duplicate'
  | 'space'
  | 'unchanged';

export interface NicknameInputProps {
  nickname: string;
  isValid: string;
  handleSetNickname: (nickname: string) => void;
  handleSetIsActive: (isActive: boolean) => void;
  handleSetIsValid: (isValid: isValidState) => void;
}

export interface EditButtonProps {
  token: string;
  nickname: string;
  isActive: boolean;
  isValid: string;
  handleSetIsValid: (isValid: isValidState) => void;
  handleSetIsActive: (isActive: boolean) => void;
}

export interface CheckNicknameProps {
  handleSetNickname: (nickname: string) => void;
  handleSetWordCnt: (wordCnt: number) => void;
  handleSetIsValid: (isValid: isValidState) => void;
  currentNickname: string;
  e: React.ChangeEvent<HTMLInputElement>;
}

export interface patchNicknameProps {
  token: string;
  nickname: string;
}

export interface usePatchNicknameProps extends patchNicknameProps {
  handleSetIsActive: (isActive: boolean) => void;
  handleSetIsValid: (isValid: isValidState) => void;
}
