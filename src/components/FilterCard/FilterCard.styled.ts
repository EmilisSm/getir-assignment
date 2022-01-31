import styled from '@emotion/styled';

export const CardTitle = styled('h3')`
  text-align: start;
  font-weight: normal;
  margin: 15px 0;
`;

export const SearchInput = styled('input')`
  margin-bottom: 16px;
  font-family: Inter, sans-serif;
  padding: 12px 16px;
  line-height: 24px;
  font-weight: 400;
  border: 2px ${(props) => props.theme.color.primary};
  border-radius: 2px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.color.secondary};
  }
  ::placeholder {
    color: black;
  }
`;
