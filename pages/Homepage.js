import styled from "styled-components";
import CasesPage from "../components/homepage/Casespage";
import HeroContent from "../components/homepage/Hero"
import WhoAmI from "../components/homepage/WhoAmISection";
import WordsAboutMe from "../components/homepage/WordsAboutMeSection";

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