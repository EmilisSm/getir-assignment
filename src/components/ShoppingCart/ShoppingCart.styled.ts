import styled from '@emotion/styled';
import { CardStyled, PriceStyled } from '../common.styled';

export const ShoppingCartCardStyled = styled(CardStyled)`
  margin-top: 15px;
  border: 6px solid ${(props) => props.theme.color.primary};
  border-radius: 2px;
`;

export const ShoppingCartItemStyled = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${(props) => props.theme.color.primaryLight};
  padding: 20px 0;
  gap: 15px;
`;

export const ItemButtonStyled = styled('div')`
  display: flex;

  svg:hover {
    background-color: #f2f0fd;
  }
`;

export const ItemQuantityStyled = styled('div')`
  background-color: ${(props) => props.theme.color.primary};
  padding: 2px 8px;
`;

export const TotalAmountStyled = styled(PriceStyled)`
  text-align: end;
  padding: 17px 24px;
  border: 2px solid #1ea4ce;
  box-sizing: border-box;
  border-radius: 2px;
  margin-top: 16px;
  margin-left: auto;
  width: fit-content;
`;
