import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    background-color: ${props => props.theme['gray-300']};
    color: ${props => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  border, input, button, textarea {
    font-family: 'Calibre', sans-serif;
    font-weight: 400;
    font-size: 1rem;

  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme['yellow-500']};
  }

`