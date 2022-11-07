import styled from "styled-components";
import CasesPage from "./Casespage";
import HeroContent from "./Hero";
import WhoAmI from "./WhoAmISection";
import WordsAboutMe from "./WordsAboutMeSection";

const MainHP = styled.main`
background-color:${({theme}) => theme.colors.grey};
`
const Homepage = () => {
  return (
  <MainHP>
  <HeroContent/>
  <WhoAmI/>
  <WordsAboutMe/>
  <CasesPage/>
  </MainHP>  );
}

export default Homepage;