import styled from '@emotion/styled';

export const CheckboxWrapperStyled = styled('div')`
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

  .checkbox > span {
    color: #34495e;
    padding: 0.5rem 0.25rem;
  }
`;

export const CheckboxStyled = styled('div')`
  input[type='checkbox'] {
    appearance: none;
    background-color: #fff;
    display: inline-grid;
    place-content: center;
    width: 22px;
    height: 22px;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    border-radius: 2px;
  }

  input[type='checkbox']:checked {
    background-color: ${(props) => props.theme.color.primary};
  }

  input[type='checkbox']::before {
    content: '';
    width: 10px;
    height: 7.33px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${(props) => props.theme.color.white};
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }

  label {
    margin-left: 8px;
  }
`;
