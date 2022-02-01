import styled from '@emotion/styled';

export const HeaderStyled = styled('header')`
  text-align: center;
  background-color: ${(props) => props.theme.color.primary};
  padding-top: 17px;
  padding-bottom: 19px;

  h1 {
    font-family: 'Pacifico', cursive;
    margin: 0;
  }
`;
