
import { ThemeProvider, } from "styled-components";
import GlobalStyle from "../components/styles/GlobalStyle";
import '../styles/globals.css'
import { theme } from "../components/styles/theme";


const MyApp = ({ Component, pageProps }) => {

  return (
  <>
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />

  <GlobalStyle></GlobalStyle>
  </ThemeProvider>
  </>
 )
}

export default MyApp
