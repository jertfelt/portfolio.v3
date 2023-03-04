import styled from "styled-components";
import Image from "next/image";
import landingpic from "../../public/img/IMG_20230303_154910.jpg"
import { device } from "../styles/Styles";
import IntroHomepage from "./Intro";
import AboutMe from "./AboutMe";
import CasesPage from "./Casespage";

const Overlay = styled.div`
position:fixed;
height:150vh;
width:100%;
inset: 0;
background: rgba(50, 57, 57, 0.5);
z-index:1;
`
const LandingImage = styled(Image)`
height: 150vh;
width:100%;
z-index:0;
position: fixed;
`

const AboveLandingImg = styled.div`
position: relative;
z-index:1;
width:100%;
`

const HeroWBackground = () => {
  return ( 
  <section>
    <LandingImage 
    src={landingpic}
    alt="Background, a painted abstract of global warming."
    layout="fill"
    objectFit="cover"
    objectPosition="center"/>
    <Overlay/>
    <AboveLandingImg>
    <IntroHomepage />
    <AboutMe/>
    <CasesPage/>
    </AboveLandingImg>

  </section> );
}
 
export default HeroWBackground;