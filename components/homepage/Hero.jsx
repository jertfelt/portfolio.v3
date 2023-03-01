import styled, {css} from "styled-components";
import Image from "next/image";
import profilepic from "../../public/img/tova-linkedin-portratt.png"
import { flex, device } from "../styles/Styles";


const PageWrapper = styled.div`
${flex};

`

const Hero = styled.div`
${flex};
flex-wrap: wrap;
position: absolute;
right: 0%;
top: 10%;
margin: ${({theme}) => theme.paddingSizes.large};
z-index: 1;
max-width: ${({theme}) => theme.containers.medium};

@media only screen and ${device.tablet}{
bottom: 0%
left: 15%;
}

@media only screen and (
  max-width: 700px
){
  height: 300px;
width: 300px;
}

@media only screen and ${device.mobileL}
{
  left: 10%;
  bottom: 10%;
  }

  @media only screen and (max-height: 800px){
    width: 400px;
    height: 400px;
  }
  @media only screen and (min-height: 800px){
    max-width: 600px;
    max-height: 600px;
  }
`


const HeroPic = styled(Image)`
filter: drop-shadow(0 6mm 4mm #344ce6);
transform: rotate(10deg);
max-width: ${({theme}) => theme.containers.xlarge};
position: relative;
overflow: hidden;
border-radius: ${({theme}) => theme.borderradius.first};

@media screen and ${device.laptop}{
  position: relative;
  left:40%;
  overflow: hidden;
  min-height:600px;
}
`


const HeroSection = styled.section`
margin-top:2rem;
margin-bottom: ${({theme}) => theme.paddingSizes.medium};
padding-top: ${({theme}) => theme.paddingSizes.large};
min-height: 50vh;
width:100%;
position: relative;
z-index: 2;
display: block;
div {
  margin: ${({theme}) => theme.paddingSizes.medium};
  width: 90%;
}
`
const Hideable = styled.div`
overflow: hidden;
margin-bottom: ${({theme}) => theme.paddingSizes.medium};
flex-wrap:wrap;
${props => 
props.kreativanimation && 
css`

 `}
`
const Heading = styled.h1`
transition: all 0.5s ease-out;
text-align:left;
font-size: 4.5rem;
line-height: ${({theme}) => theme.fontSizes.xlarge};
text-transform: uppercase;
color: ${({theme}) => theme.colors.lightblue};
padding:1rem;


  @media only screen and (max-width: 700px
  ){
  font-size:48px;
  line-height:1rem;
  }
  @media only screen and (max-width: 500px
    ){
    font-size:40px;
    line-height:1rem;
    }

  ${props => 
    props.first && 
    css`
    color: ${({theme}) => theme.colors.lightblue};
    @media only screen and (max-width: 700px
      ){
      margin-top:3rem;
      }
    `}

 ${props => 
  props.alignright && 
  css`
  text-align:right;
  position: absolute;
  
  right: 30px;
  top:220px;
  color: ${({theme}) => theme.colors.lightblue};

  @media only screen and (max-width: 700px
    ){
    right:50%;
    }
    @media screen and ${device.laptop}{
      position: absolute;
      right: 20%;
    }
  `}
  
  
`

const HeroContent = () => {

  return(
    <>
    <PageWrapper>
    <Hero>
    <HeroPic
    src={profilepic}
    loading="lazy"
    alt="Svartvit bild på Tova som tittar in i kameran."
    />
    </Hero>
    </PageWrapper>
    <HeroSection>
    <div>
      <Hideable>
        <Heading
        first
        title="Multidisciplinär"
        className="headingfont">
          Multidisciplinär
        </Heading>
      </Hideable>
      <Hideable
      kreativanimation
        >
        <Heading alignright
        title="och kreativ"
        className="headingfont">
          & KREATIV
        </Heading>
      </Hideable>
      <Hideable>
        <Heading center
        title="frontendare"
        className="headingfont">
          FRONTENDARE
        </Heading>
    
      </Hideable>
    </div>
    </HeroSection>
    </>
  )
}

export default HeroContent