import styled from '@emotion/styled';

export const AppMain = styled('main')`
  .wrapper {
    margin: 1em 2em;
    display: block;
  }

  @media (min-width: 1100px) {
    .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 15px;
    }
    .first-column {
      width: 296px;
    }
    .second-column {
      min-width: 608px;
    }
    .third-column {
      flex: auto;
      max-width: 298px;
    }

    main {
      margin: auto 105px;
    }
  }
`;
