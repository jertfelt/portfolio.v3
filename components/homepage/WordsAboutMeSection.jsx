import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image"
//components
import nextbutt from "../../public/icons/forwardbuttwhite.png";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";

const flexInst = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`

const WordsSection = styled.section`
height: 100vh;
padding:2rem;
padding-bottom: ${({theme}) => theme.paddingSizes.large};
width:100%;
background-color: ${({theme}) => theme.colors.purple};
position: relative;
z-index:1;

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 75%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}

&::after {
  background: inherit;
  content: '';
  display: block;
  height: 75%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
-webkit-transform: skewY(0deg);
transform: skewY(0deg);
-webkit-transform-origin: 100%;
transform-origin: 100%;
}

`
const Row = styled.div`
margin-top:3em;
padding:2em;
${flexInst ({direction: "row", justify: "space-between"})}
`
// transition: all 0.5s ease-out;
const Carousel = styled.article`
background-color:black;
height: 400px;
max-height:80vh;
width:80%;
`

const WordsAboutMe = () => {
  const [quote, setQuote] = useState([])

  useEffect(() => {
    //fetch quotes
  }, [])

  const nextQuote = () => {
    //map and filter out per id
    //i++
  }

  return ( 
  <WordsSection>
  <Container xlarge>
  <Row>
  <Carousel>

  </Carousel>
  <Button
  next
  aria-label="button"
  onClick={nextQuote}>
  <Image 
  src={nextbutt}
  alt="Nästa"
  aria-label="button"/>
  </Button>
  </Row>
  </Container>
  </WordsSection> );
}
 
export default WordsAboutMe;