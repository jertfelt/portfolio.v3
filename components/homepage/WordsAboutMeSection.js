import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image"
//components
import nextbutt from "../../public/icons/forwardbuttwhite.png";
import { Button } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { quotesAboutMe } from "../../data/quotes";
import  thirdpic from "../../public/img/tova-atelje2 copy.png";
import secondpic from "../../public/img/tova-poetry-slam.png";
import firstpic from "../../public/img/publishing-priset-2.png";


const flexInst = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`

const WordsSection = styled.section`
min-height: 120vh;
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

padding-bottom:8rem;


`

// &::after {
//   background: inherit;
//   content: '';
//   display: block;
//   height: 75%;
//   left: 0;
//   position: absolute;
//   right: 0;
//   z-index: -1;
//   bottom: 0;
//     -webkit-transform: skewY(0deg);
//   transform: skewY(0deg);
//   -webkit-transform-origin: 100%;
//   transform-origin: 100%;
// }
const Row = styled.div`
margin-top:3em;
padding:2em;
${flexInst ({direction: "row", justify: "space-between"})}
padding-bottom: 4rem;
@media only screen and (max-width: 700px
  ){
padding-bottom:1rem;
  }
`
// transition: all 0.5s ease-out;
const Carousel = styled.article`
height: 400px;

width:80%;
p {
  font-family: Roboto;
  font-size:${({theme}) => theme.fontSizes.medium};
}

`
const QuoteImage =styled(Image)`
filter: drop-shadow(4mm 0mm 3mm #344ce6);
height: 30%;
max-width: 90%;
border-radius: ${({theme}) => theme.borderradius.second};
z-index:1;
transform: rotate(3deg);
`

const Headline = styled.h3`
font-family: Arya;
color:${({theme}) => theme.colors.lightblue};
font-size:${({theme}) => theme.fontSizes.xlarge};
text-decoration: underline;
margin-bottom:-1rem;
z-index:3;
position: absolute;
top:0;

`
const QuoteLine = styled.h3`
font-family: Roboto;
color:${({theme}) => theme.colors.white};
font-size:${({theme}) => theme.fontSizes.large};
font-style: italic;
width:80%;
margin-bottom:-0.2rem;
`
const WordsAboutMe = () => {
  const [quote, setQuote] = useState([])
  const [qID, setqID] = useState(0)
  const [imgsrc, setImage] = useState(firstpic)
  const [imgalt, setAlt] = useState("Bild på Tova")

  useEffect(() => {
    const first = quotesAboutMe.filter(item => (item.id === 1))
    setQuote(first)
    setqID(1)
    setImage(firstpic)
    setAlt("Bild på Tova som tar emot Publishingpriset 2017")
  }, [])
  const nextQuote = () => {

      switch (qID){
        case 1:
          setQuote(quotesAboutMe.filter(item => (item.id === 2)))
          setImage(secondpic)
          setqID(2)
          setAlt("Tova läser upp posei på Poetry Slam. Foto: Malin Lövkvist")
        break;
        case 2:
          setQuote(quotesAboutMe.filter(item => (item.id === 3)))
          setImage(thirdpic)
          setqID(3)
          setAlt("Tova har utställning i sin ateljé LITEN ELD, 2021")
        break;

        default:
          setQuote(quotesAboutMe.filter(item => (item.id === 1)))
          setqID(1)
          setImage(firstpic)
    }
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
  <QuoteImage
  src={imgsrc}
  alt={imgalt}
  />
  <QuoteLine>“{item.quote}”</QuoteLine>
  <p>{item.name}</p>   
  </div>
  ) )}
  </Carousel>
  <Button
  next
  aria-label="button"
  onClick={nextQuote}>
  <Image 
  height={200}
  width={300}
  src={nextbutt}
  alt="Nästa"
  aria-label="button"/>
  </Button>
  </Row>
  </Container>
  </WordsSection> );
}
 
export default WordsAboutMe;