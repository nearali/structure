
   
import styled from '@emotion/styled';
import { COLORS } from '@/constants/colors.constants';

export const LayoutStyled = styled.div`
  header {
    height: 70px;
    background-color: ${COLORS.GREY};
    width: calc(100% - 40px);
    align-items: center;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
`;
