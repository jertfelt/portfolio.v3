import styled from "styled-components";
import HeroContent from "../components/homepage/Hero";
import WhoAmI from "../components/homepage/WhoAmISection";

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
  <WhoAmI/>

  
  </MainHP>  );
}
 
export default Homepage;