import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

const GlobalStyles = css`
  ${emotionReset}
  body {
    font-family: 'Noto Sans KR';
  }
`;

export default GlobalStyles;
