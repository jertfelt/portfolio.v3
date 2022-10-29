import styled from "styled-components";
import HeroContent from "../components/Hero";

const wh = (w, h = w) => `
  width: ${w};
  height: ${h};
`;

const flexInst = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`
// ${flexInst({direction: "column"})}


const MainHP = styled.main`
background-color:${({theme}) => theme.colors.grey};
`


const Homepage = () => {

  return (
  <MainHP>
   <HeroContent/>

  </MainHP>  );
}
 
export default Homepage;