import { MouseEventHandler } from 'react';
import * as Styled from './Button.styles';

export interface IButtonProps {
  className?: string;
  type?: 'reset' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  buttonStyle?: 'primary' | 'light' | 'dark';
}

const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({ children, ...props }) => {
  return (
    <Styled.ButtonStyled data-testid="button" {...props}>
      {children}
    </Styled.ButtonStyled>
  );
};

export default Button