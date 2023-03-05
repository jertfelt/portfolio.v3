import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  background-color: ${({theme}) => theme.colors.lavendel};
  color: ${({theme}) => theme.colors.white};
}


`
export default GlobalStyle;

