import styled from '@emotion/styled';
import { CardStyled } from '../common.styled';

export const FilterCardStyled = styled(CardStyled)`
  height: 244px;
`;

export const SearchInputStyled = styled('input')`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 16px;
  padding: 12px 16px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.color.primary};
  }
  ::placeholder {
    color: #a8a8a8;
  }
`;
