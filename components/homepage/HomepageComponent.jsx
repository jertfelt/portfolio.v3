import AboutMe from "./AboutMe";
import BackgroundImg from "./BackgroundImg";
import CasesPage from "./Casespage";
import styled from "styled-components"

const Section = styled.section`
background-color: ${({theme}) => theme.colors.lavendel};
width:100%;
z-index:0;`
const HomepageComponent = () => {
  return (<Section>
    <BackgroundImg/>
    <AboutMe/>
    <CasesPage/>
  </Section>  );
}
export default HomepageComponent;