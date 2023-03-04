import landingpic from "../../public/img/IMG_20230303_154910.jpg"
import Image from "next/image";
import styled, {css} from "styled-components";
import IntroHomepage from "./Intro";
import { device } from "../styles/Styles";

const BackgroundWrap = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
overflow: hidden;
z-index: 1;
@media screen and ${device.maxtablet}{ 
  border-radius: ${({theme}) => theme.borderradius.second};
  height:90vh;
  top:-100px;
  right:10%;
}
@media screen and ${device.maxmobile}{
 display:none;
}
`
const Overlay = styled.div`
position:fixed;
height:150vh;
width:100%;

background: rgba(50, 57, 57, 0.3);
z-index:1;`

const BackgroundText = styled.div`
margin: 0;
text-align: left;
padding-top: 30vh;
text-shadow: 1px 1px 1px #3c5c5e;
z-index: 1;
position: relative;
padding-bottom:30vh;
@media screen and ${device.maxtablet}{ 
  padding:3rem;
  padding-top:20vh;
  
}
`

const BackgroundImg = () => {
  return ( 
    <>
    <BackgroundWrap>
      <Image
        alt="Global warming"
        src={landingpic}
        placeholder="blur"
        quality={100}
        fill
        sizes="80vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </BackgroundWrap>
    <Overlay/>
    <BackgroundText>
    <IntroHomepage/>
    </BackgroundText>
  </>
   );
}
 
export default BackgroundImg;