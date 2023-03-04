import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  background-color: ${({theme}) => theme.colors.grey};
  color: ${({theme}) => theme.colors.white};
}


`
export default GlobalStyle;

