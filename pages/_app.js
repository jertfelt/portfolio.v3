
import { ThemeProvider, } from "styled-components";
import GlobalStyle from "../components/styles/GlobalStyle";
import '../styles/globals.css'


const maintheme = {
  fontSizes: {
    small:"12px",
    medium: "20px",
    large:"34px",
    xlarge:"72px"
  },
  colors: {
    grey: "#282828",
    white: "#f4f4f4",
    lightblue: "#bee5f5",
    purple: "#483d8b",
    vividblue: "#344ce6",
    black: "black",
  }
}


const MyApp = ({ Component, pageProps }) => {

  return (
  <>
  <ThemeProvider theme={maintheme}>
  <Component {...pageProps} />

  <GlobalStyle></GlobalStyle>
  </ThemeProvider>
  </>
 )
}

export default MyApp
