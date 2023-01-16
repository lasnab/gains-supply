import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;

  }
  * {
  // border: 0.5px solid lightblue;
  }
`;

export const headerHeight = '50px';
export const footerHeight = '250px';
export const DEFAULT_IMAGE_URL = '';

export default GlobalStyles;
