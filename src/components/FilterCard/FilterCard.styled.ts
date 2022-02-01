import styled from '@emotion/styled';
import { CardWrapper } from '../common.styled';

export const CheckBoxWrapper = styled('div')`
  max-height: 176px;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const FilterCardWrapper = styled(CardWrapper)`
  height: 244px;
`;

export const SearchInput = styled('input')`
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
