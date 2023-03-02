import styled from "styled-components";
import CasesPage from "../components/homepage/Casespage";
import HeroContent from "../components/homepage/Hero"
import WhoAmI from "../components/homepage/WhoAmISection";
import WordsAboutMe from "../components/homepage/WordsAboutMeSection";
import IntroHomepage from "../components/homepage/Intro";
import AboutMe from "../components/homepage/AboutMe";
const MainHP = styled.main`
background-color:${({theme}) => theme.colors.grey};
`
const Homepage = () => {
  return (
  <MainHP>
    <IntroHomepage/>
    <AboutMe/>
    <CasesPage/>

  {/* <HeroContent/>
  <WhoAmI/>
  <WordsAboutMe/>
  <CasesPage/> */}
  </MainHP>  );
}

export default Homepage;