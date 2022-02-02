import styled from '@emotion/styled';

export const CardStyled = styled('div')`
  background-color: #ffffff;
  padding: 24px;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;

export const PriceStyled = styled('div')`
  color: ${(props) => props.theme.color.primary};
`;

export const ButtonStyled = styled('button')`
  background: ${(props) => props.theme.color.primary};
  border: none;
  border-radius: 2px;
  color: ${(props) => props.theme.color.white};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  transition: opacity 100ms;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const CardHeadingSmallStyled = styled('h3')`
  color: #697488;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin: 24px 0 12px 0;
`;
