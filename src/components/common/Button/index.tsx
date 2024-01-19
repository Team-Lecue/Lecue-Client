import { ButtonHTMLAttributes, ReactNode } from 'react';

import * as S from './Button.style';

export interface ButtonProps
  extends Pick<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | 'disabled' | 'onClick'
  > {
  variant: S.ButtonStyle;
  backgroundColor?: string;
  children: ReactNode;
}

function Button(props: ButtonProps) {
  const { children, onClick, disabled, variant, backgroundColor } = props;
  return (
    <S.CustomButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      $bookBackgroundColor={backgroundColor}
    >
      {children}
    </S.CustomButton>
  );
}

export default Button;
