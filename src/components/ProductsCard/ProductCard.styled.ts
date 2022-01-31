import styled from '@emotion/styled';
import Pagination from '@mui/material/Pagination';
import { CardWrapper } from '../common.styled';

export const PaginationWrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 32px 0;
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
  margin: 0 auto;
`;

export const ProductWrapper = styled('div')`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 127px;
`;

export const AddButton = styled('button')`
  background: #1ea4ce;
  border: none;
  border-radius: 3px;
  width: 100%;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const ImageWrapper = styled('img')`
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #1ea4ce;
  display: inline-block;
  background-color: lightblue;
  margin-bottom: 8px;
  width: 92px;
  height: 92px;
`;

export const ProductName = styled('div')`
  font-weight: 600;
`;
