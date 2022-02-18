import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

const GlobalStyles = css`
  ${emotionReset}
  body {
    font-family: 'Noto Sans KR';
  }

  .MuiDataGrid-footerContainer {
    min-height: 0 !important;
  }

  .MuiToolbar-gutters {
    padding: 0 24px !important;
    @media (max-width: 768px) {
      padding: 0 16px !important;
    }
  }
`;

export default GlobalStyles;
