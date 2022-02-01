import styled from '@emotion/styled';
import { CardWrapper, PriceWrapper } from '../common.styled';

export const ShoppingCartWrapper = styled(CardWrapper)`
  margin-top: 15px;
  border: 6px solid ${(props) => props.theme.color.primary};
  border-radius: 2px;
`;

export const ShoppingCartItem = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${(props) => props.theme.color.primaryLight};
  padding: 20px 0;
  gap: 15px;
`;

export const ItemButton = styled('div')`
  display: flex;

  svg:hover {
    background-color: #f2f0fd;
  }
`;

export const ItemQuantity = styled('div')`
  background-color: ${(props) => props.theme.color.primary};
  padding: 2px 8px;
`;

export const TotalAmount = styled(PriceWrapper)`
  text-align: end;
  padding: 17px 24px;
  border: 2px solid #1ea4ce;
  box-sizing: border-box;
  border-radius: 2px;
  margin-top: 16px;
  margin-left: auto;
  width: fit-content;
`;
