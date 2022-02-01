import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';
import { CardWrapper, ButtonStyled } from '../common.styled';

export const ProductsHeading = styled('h4')`
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.25px;
  margin: 16px 0;
  color: #6f6f6f;
`;

export const ProductCardWrapper = styled(CardWrapper)`
  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1020px) {
    grid-template-columns: repeat(4, 1fr);
  }

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-evenly;
  gap: 15px;
  align-items: center;
`;

export const ProductWrapper = styled('div')`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 127px;
  margin: 0 auto;
`;

export const ImageWrapper = styled('img')`
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.color.primary};
  display: inline-block;
  background-color: lightblue;
  margin-bottom: 8px;
  width: 92px;
  height: 92px;
`;

export const ProductName = styled('div')`
  font-weight: 600;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;

export const AddButton = styled(ButtonStyled)`
  width: 100%;
`;

export const ProductTypeButton = styled(ButtonStyled)`
  margin-right: 8px;
  margin-bottom: 16px;
  padding: 6px 16px;
  gap: 8px;

  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;

export const PaginationWrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 32px 0;
`;
