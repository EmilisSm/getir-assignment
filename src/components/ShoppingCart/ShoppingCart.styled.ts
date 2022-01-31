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
  border-bottom: 1px solid #f2f0fd;
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
  padding: 20px 25px 0 0;
`;
