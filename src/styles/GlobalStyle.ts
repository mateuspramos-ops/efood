import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* ── Cores ── */
    --ink: #1b1a17;
    --ink-soft: #2a2823;
    --parchment: #f7f3ec;
    --parchment-dark: #efe8da;
    --saffron: #e8a33d;
    --saffron-dark: #c9821f;
    --clay: #b5483b;
    --sage: #6b7b5e;
    --stone: #8a8478;
    --stone-light: #c2bcae;

    /* ── Tipografia ── */
    --display: 'Fraunces', serif;
    --body: 'Work Sans', sans-serif;
    --mono: 'Space Mono', monospace;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--body);
    background-color: var(--parchment);
    color: var(--ink);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  ::selection {
    background-color: var(--saffron);
    color: var(--ink);
  }
`

export default GlobalStyle
