import { ThemeProvider } from "styled-components";

const maintheme = {
  fonts: {
    heading: ["Arya", "sans-serif"],
    normal: ["Roboto", "sans-serif"],
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

const Theme = ({children}) => (
<ThemeProvider theme={maintheme}>
  {children}
</ThemeProvider>

)
export default Theme; 