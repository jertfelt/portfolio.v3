import styled from "styled-components";
import Image from "next/image";
import profilepic from "../public/img/tova-linkedin-portratt.png"

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

const PageWrapper = styled.div`
${flexInst}
`

const Hero = styled.div`
${flexInst}
flex-wrap: wrap;
position: absolute;
right: 0%;
top: 10%;
margin: ${({theme}) => theme.paddingSizes.large};
z-index: 1;
max-width: ${({theme}) => theme.containers.medium};

@media only screen and (min-width: 768px){
bottom: 0%
left: 15%;
}

@media only screen and (
  max-width: 700px
){
  height: 300px;
width: 300px;
}
@media only screen and (min-width: 600px)
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
width:40em;
border-radius: ${({theme}) => theme.borderradius.first}
`

const Homepage = () => {

  return (
  <MainHP>
    <PageWrapper>
    <Hero>
    <HeroPic
    src={profilepic}
    loading="lazy"
    alt="Svartvit bild på Tova som tittar in i kameran."
    />
    </Hero>
    </PageWrapper>

  </MainHP>  );
}
 
export default Homepage;