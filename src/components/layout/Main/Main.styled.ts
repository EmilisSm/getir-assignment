import styled from '@emotion/styled';

export const MainWrapperStyled = styled('div')`
  margin: 1em 2em;
  display: block;

  @media (min-width: 1220px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  }
`;

export const FirstColumnStyled = styled('div')`
  @media (max-width: 1219px) and (min-width: 1064px) {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  @media (min-width: 1220px) {
    width: 296px;
  }
`;

export const SecondColumnStyled = styled('div')`
  @media (min-width: 1220px) {
    min-width: 608px;
  }
`;
export const ThirdColumnStyled = styled('div')`
  @media (min-width: 1220px) {
    width: 296px;
  }
`;
