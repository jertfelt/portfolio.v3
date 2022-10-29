
import { ThemeProvider, } from "styled-components";
import GlobalStyle from "../components/styles/GlobalStyle";
import '../styles/globals.css'

//!saving these two for later:
// const wh = (w, h = w) => `
//   width: ${w};
//   height: ${h};
// `;

// export function flexInst ({direction, align, justify}){`
// display: flex;
// flex-direction: ${direction || "column"};
// align-items: ${align || "center"};
// justify-content: ${justify || "center"}; 
// `} 


const maintheme = {
  device: {
    "phone": '@media(min-width: 400px)',
    'phoneWide': '@media(min-width: 480px)',
    'phablet': '@media(min-width: 560px)',
    'tabletSmall': '@media(min-width: 640px)',
    'tabletWide': '@media(min-width: 1240px)',
    'desktop': '@media(min-width: 1248px)',
    'desktopWide': '@media(min-width: 1440px)',
},
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
