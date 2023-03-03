import styled from "styled-components";
import CasesPage from "../components/homepage/Casespage";
import HeroContent from "../components/homepage/Hero"
import WhoAmI from "../components/homepage/WhoAmISection";
import WordsAboutMe from "../components/homepage/WordsAboutMeSection";
import HeroWBackground from "../components/homepage/HeroWithBackground";

const MainHP = styled.main`
background-color:${({theme}) => theme.colors.grey};
`

const Homepage = () => {
  return (
  <MainHP>
    <HeroWBackground/>
  </MainHP>  );
}

export default Homepage;