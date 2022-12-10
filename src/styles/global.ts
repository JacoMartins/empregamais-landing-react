import styled, { createGlobalStyle } from 'styled-components';

export const ContainerSideMargin = 80;
export const ContainerSideMarginMobile = 40;

export const GlobalStyle = createGlobalStyle`
  :root {
    --header: #fff;

    --green-800: #81D3B5;
    --green-500: #5FB69A;
    --green-250: #3F8E68;
    --green-150: #2B4739;

    --blue-800: #91C9F3;
    --blue-500: #43A0F5;
    --blue-250: #2A5FBA;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media screen and (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--dark-mode-background);
    -webkit-font-smoothing: antialised;
  }
  
  body, input, textarea, button {
    font-family: Heveltica, 'Inter', Arial, sans-serif;
    letter-spacing: -0.0625rem;
    font-weight: 400;
    color: var(--dark-mode-text-850);
    font-size: 1.0625rem;

    @media screen and (max-width: 720px) {
      font-size: calc(1.0625rem + 0.125rem);  
      border-radius: 0.5rem;
    }
  }

  input {
    border: 2px solid white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: transparent;
    color: white;
    outline: none;
    transition: 0.1s;
    font-weight: 500;

    &:focus {
      outline: solid 2px rgba(0, 0, 0, 0.15);
    }
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.45);
    }
  }

  .searchInput {
    border: 2px solid white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: transparent;
    color: white;
    outline: none;
    transition: 0.1s;
    font-weight: 600;

    &:focus {
      outline: solid 2px rgba(255, 255, 255, 0.45);
    }
    
    &::placeholder {
      color: white;
    }
  }

  button {
    border: 2px solid white;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background: white;
    color: var(--green-250);
    outline: solid 0px rgba(255, 255, 255, 0.25);
    font-weight: 600;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      filter: brightness(0.90);
    }

    &:active {
      outline: solid 2px rgba(255, 255, 255, 0.45);
      filter: brightness(1);
    }
  }

  h1 {
    font-weight: 500;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-weight: 600;
    
  }
`;