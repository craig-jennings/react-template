import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: optional;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'),
         local('OpenSans-Regular'),
         url("https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2")
         format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  :root {
    /* -- Color Palette -- */
    --white: #ffffff;
    --gray1: #e1e1e3;
    --gray2: #c2c2c7;
    --gray3: #a4a4ac;
    --gray4: #858590;
    --gray5: #686872;
    --gray6: #4d4d54;
    --gray7: #313135;
    --gray8: #151517;
    --black: #000000;

    --primary1: #bed8ff;
    --primary2: #96baff;
    --primary3: #6f98fe;
    --primary4: #4771fe;
    --primary5: #2046fd;
    --primary6: #021ef3;
    --primary7: #020ecb;
    --primary8: #0202a3;

    --box-shadow--1: 0 2px 2px 0    rgba(0, 0, 0, 0.14),
                     0 3px 1px -2px rgba(0, 0, 0, 0.12),
                     0 1px 5px 0    rgba(0, 0, 0, 0.2);
    --box-shadow--2: 0 4px 5px 0    rgba(0, 0, 0, 0.14),
                     0 1px 10px 0   rgba(0, 0, 0, 0.12),
                     0 2px 4px -1px rgba(0, 0, 0, 0.3);
    --box-shadow--3: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
                     0 3px 14px 2px rgba(0, 0, 0, 0.12),
                     0 5px 5px -3px rgba(0, 0, 0, 0.2);

    /* -- App Styles -- */
    --body--bg-color: var(--gray8);
    --body--color: var(--gray1);
    --body--font-family: "Open Sans", sans-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--body--bg-color);
    color: var(--body--color);
    font-family: var(--body--font-family);
    height: 100%;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  svg {
    fill: currentColor;
  }
`;

export default GlobalStyles;
