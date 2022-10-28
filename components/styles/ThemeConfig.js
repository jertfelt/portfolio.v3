import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#bee5f5",
  text: "black",
  toggleBorder: "#344ce6",
  background: "white"
}

export const darkTheme = {
body: "#282828",
text: "#f4f4f4",
toggleBorder: "#344ce6",
background: "black"
}


export const GlobalStyles = createGlobalStyle`
body{
  background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Roboto, sans-serif;
    transition: all 0.50s linear;
}`