import styled from '@emotion/styled';

export const AppMainWrapper = styled('main')`
  .wrapper {
    margin: 1em 2em;
    display: block;
  }

  @media (max-width: 1020px) and (min-width: 800px) {
    .first-column {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
  }

  @media (min-width: 1020px) {
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
      width: 296px;
    }

    main {
      margin: auto 105px;
    }
  }
`;
