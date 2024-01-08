import { css } from '@emotion/react';

const resetCss = css`
  :root {
    --vh: 100%;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    padding: 0;
    margin: 0;

    border: 0;
    font-size: 100%;

    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  *[hidden] {
    display: none;
  }

  body {
    width: 37.5rem;
    height: 66.7rem;

    line-height: 1;
    touch-action: manipulation;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const gStyle = css`
  ${resetCss}

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);

    scroll-behavior: smooth;

    user-select: none;

    display: flex;
    justify-content: center;

    font-size: 62.5%;
  }

  ul,
  li {
    padding-left: 0;
    list-style: none;
  }

  a {
    color: inherit;

    text-decoration: none;
  }

  input,
  button {
    outline: none;

    border: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;

    padding: 0;
  }

  input {
    appearance: none;

    &:focus {
      outline: none;
    }
  }
`;

export default gStyle;
