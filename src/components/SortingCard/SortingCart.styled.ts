import styled from '@emotion/styled';
import Vector from '../../assets/Vector.png';

export const FormControlWrapper = styled('form')`
  color: #525252;

  input[type='radio'] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid #dfdee2;
    border-radius: 50%;
  }

  input[type='radio']:checked {
    background-image: url(${Vector});
    background-repeat: no-repeat, repeat;
    background-position: center;
  }

  label {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.16px;
    text-align: left;
    margin-left: 9px;
  }

  div {
    display: flex;
    margin-bottom: 16px;
  }

  div:last-child {
    margin-bottom: 0;
  }
`;
