import styled from '@emotion/styled';
import { IButtonProps } from './Button';

export const ButtonStyled = styled.button<{
  buttonStyle?: IButtonProps['buttonStyle'];
}>`
  padding: 10px 25px;
  border-radius: 7px;
  font-weight: 600;
  font-size: 18px;
  border: none;
  display: flex;
  align-items: center:
  justify-content: center;
  cursor: pointer;
`;
