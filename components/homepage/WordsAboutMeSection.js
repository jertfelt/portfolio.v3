import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image"
//components
import nextbutt from "../../public/icons/forwardbuttwhite.png";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { quotesAboutMe } from "../../data/quotes";





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
height: 400px;
max-height:80vh;
width:80%;
p {
  font-family: Roboto;
  font-size:${({theme}) => theme.fontSizes.medium};
}
`
const Headline = styled.h3`
font-family: Arya;
color:${({theme}) => theme.colors.lightblue};
font-size:${({theme}) => theme.fontSizes.xlarge};
text-decoration: underline;
margin-bottom:-1rem;
`
const QuoteLine = styled.h3`
font-family: Roboto;
color:${({theme}) => theme.colors.white};
font-size:${({theme}) => theme.fontSizes.large};
font-style: italic;
`
const WordsAboutMe = () => {
  const [quote, setQuote] = useState([])

  useEffect(() => {
    const first = quotesAboutMe.filter(item => (item.id === 1))
    setQuote(first)
  }, [])

  let test2 = quotesAboutMe.filter(item => (item.id === 2))
  console.log("filter", test2)
  let test3 = test2.map(item => (item.headline))
  console.log("testing", test3)

  const nextQuote = () => {
    
  }



  return ( 
  <WordsSection>
  <Container xlarge>
  <Row>
  <Carousel>
  {quote.map(item => (
  <div
  key={item.id}>
  <Headline>{item.headline}</Headline>
  <QuoteLine>"{item.quote}"</QuoteLine>
  <p>{item.name}</p>   
  </div>
  ) )}
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