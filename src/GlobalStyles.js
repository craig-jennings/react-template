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
    /* -- App Styles -- */
    --font-family: "Open Sans", sans-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-family);
  }

  button {
    font-family: var(--font-family);
  }

  svg {
    fill: currentColor;
  }
`;

export default GlobalStyles;
