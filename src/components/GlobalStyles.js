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
    --default: hsl(0, 0%, 100%);
    --default--hover: hsl(0, 0%, 90%);;
    --default-text: hsl(0, 0%, 13%);

    --danger: hsl(0, 91%, 66%);
    --danger--active: hsl(0, 100%, 38%);
    --danger--hover: hsl(0, 100%, 57%);
    --danger-text: hsl(0, 0%, 13%);

    --neutral: hsl(211, 19%, 84%);
    --neutral--active: hsl(211, 9%, 74%);
    --neutral--hover: hsl(211, 14%, 79%);
    --neutral-text: hsl(0, 0%, 13%);

    --primary: hsl(200, 90%, 56%);
    --primary--active: hsl(200, 100%, 38%);
    --primary--disabled: hsla(200, 90%, 56%, .8);
    --primary--hover: hsl(200, 100%, 43%);
    --primary-text: hsl(0, 0%, 100%);
    --primary-text--disabled: hsl(0, 0%, 100%, .8);

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
    --bg-color: hsl(0, 0%, 95%);

    --font-family--body: "Open Sans", sans-serif;
    --font-family--header: "PT Serif", sans-serif;

    --input-border-color: var(--default--hover);
    --input-bg-color: var(--default);

    --link-color: hsl(215, 100%, 42%);
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
  }

  svg {
    fill: currentColor;
  }
`;

export default GlobalStyles;
