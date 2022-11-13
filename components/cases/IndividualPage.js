import { useRouter } from "next/router";

import styled, {css} from "styled-components";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import {Grid} from "../../components/styles/Grid.styled"

//next and react

import Image from "next/image";
import {useState, useEffect } from "react";

import  backbutt from "../../public/icons/backbuttwhtie.png";
import  nextbutt from "../../public/icons/forwardbuttwhite.png";

import Link from "next/link";
import ProgressBar from "../helpers/ProgressBar.js";


const Detail = styled.section`
min-height:100vh;
font-family: Roboto;
${flex({align:"center"})}
padding:2rem;
font-family: Roboto;
max-width:100%;
article{
  ${flex}
 
}

`

const Wrapper = styled.div`
width:100%;
flex-wrap:wrap;
background-color:  ${({theme}) => theme.colors.black};
${flex}
gap:5px;

h1{
  font-family:Arya;
  font-size:${({theme}) => theme.fontSizes.mediumlarge};
  margin-top:2rem;
  color: ${({theme}) => theme.colors.lightblue};
  text-transform: uppercase;
}
p{
  font-size:${({theme}) => theme.fontSizes.medium};
  margin-top:-3rem;
  padding-bottom:2rem;
}
`
const Info= styled.div`

h2{
  text-transform: uppercase;
  font-size:${({theme}) => theme.fontSizes.large};
}
p{
  line-height:1.5rem;
  font-size:${({theme}) => theme.fontSizes.medium};
}
`
const ImageContainer=styled.div`
${flex} 
gap:10px;
`
const Tags = styled.span`
${flex({direction: "row"})}
gap:5px;
p{
  color: ${({theme}) => theme.colors.lightblue};
}`


const RowOfArrows=styled.div`

${flex({direction: "row", align:"center", justify:"space-between"})}`

const Arrows = styled(Image)`
height: 40px;
width: 40px;
&:hover{
  transform: skewY(5deg);
  background-color:${({theme}) => theme.colors.vividblue};
}
`
const ImageWrapper= styled.div`
width: 100%;
  .image--1 {
    object-fit: contain;
    width: 100%;
    height: 100%;
    
  }
  .image--2{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`
const CaseImage = styled(Image)`
`
const MoreInfo = styled.span`
`
const Tech = styled.div``
const TechProgressBar = styled.div``

const IndividualPage = ({array, id}) => {

  const [imageSize, setSmageSize] = useState({
    width: 800,
    height: 800
   });

  let individual = array.filter(item => {
    return item.id.toString() === id
  })

  const [showBack, setBack] = useState(false)
  const [showButts, setShowButts] = useState(true)
  const [showFront, setFront] = useState(true)
  let max = (array.length);
  const next = Number(id)+1;
  const back = Number(id)-1; 
 
 useEffect(() => {
   if (id === undefined){
     setShowButts(false)
     console.log("id was undefined")
   }
   else{
     setShowButts(true)
   }
 },[id])
 
 
 useEffect(() => {
   if (Number(id) >= 1){
     setBack(true)
     console.log(Number(id) >= 1)
   }
   if (Number(id) >= max){
     console.log(Number(id) >= max)
     setFront(false)
   }
 },[id])
 


  return (
  <Detail>
    {individual.map(item => (
      <article key={item.id}>
        <Wrapper>
         <h1>{item.title}</h1>
         <p>{item.sub}</p>
         </Wrapper>
         <Info>
      
          <p>{item.text}</p>
          <Tech>
          <h3>Följande tekniker var krav:</h3>
         <ul>
         {item.moreinfo.teknik.map(item => (
          <li>{item}</li>
         ))}
         </ul>
         </Tech>
         <TechProgressBar>
          <ProgressBar
          items= {item.moreinfo.languages}></ProgressBar>
         </TechProgressBar>
         </Info>
         <ImageContainer>
         <ImageWrapper
         second>
         <CaseImage 
         layout="fill"
         className="image--1"
         onLoadingComplete={target => {
          setSmageSize({
            width: target.naturalWidth,
            height: target.naturalHeight
          });
         }}
        width={imageSize.width}
        height={imageSize.height}
      
         alt= {item.sources.imgalt}
         src={item.sources.imgurl}
         />
         </ImageWrapper>
         <MoreInfo>
         <p>{item.moreinfo.text1}<br/>{item.moreinfo.text1part2}</p>
        </MoreInfo>
         <ImageWrapper
         first>
        <CaseImage
        layout="responsive"
        className="image--2"
        onLoadingComplete={target => {
          setSmageSize({
            width: target.naturalWidth,
            height: target.naturalHeight
          });
         }}
        width={imageSize.width}
        height={imageSize.height}
        
         alt= {item.extra.file01.alt}
         src={item.extra.file01.url}
         />
         </ImageWrapper>
         <MoreInfo>
         <p>{item.moreinfo.text1part3}</p>
        </MoreInfo>
         </ImageContainer>
        
        {/* <Tags>
          <p>#{item.tags.c1}</p>
          <p>#{item.tags.c2}</p>
          <p>#{item.tags.c3}</p>
          </Tags> */}
      {showButts ? ( <RowOfArrows>
      {showBack && 
      <Link href={'/cases/' + back}>
        <Arrows src={backbutt}
        aria-label="button"
        alt="Bakåt"/>
        </Link>
      }
      {showFront &&
        <Link href={'/cases/' + next}>
        <Arrows src={nextbutt}
        aria-label="button"
        alt="Nästa"/></Link>
      }
      </RowOfArrows>
      )
      : (null)}
      
      </article>
    ))}
   
  
  </Detail> );
}
 
export default IndividualPage;