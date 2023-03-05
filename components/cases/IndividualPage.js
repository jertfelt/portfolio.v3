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
padding:0;
font-family: Roboto;
max-width:100%;
article{
  ${flex}
}
@media ${device.tablet}{
  padding:2rem;
}
`

const Wrapper = styled.div`
width:100%;
flex-wrap:wrap;

${flex}
gap:5px;

h1{
  font-family:Arya;
  font-size:${({theme}) => theme.fontSizes.mediumlarge};
  margin-top:2rem;
  color: ${({theme}) => theme.colors.lightblue};
  text-transform: uppercase;
  line-height:120%;
  @media screen and (max-width:500px){

    text-align:center;
  }
}
p{
  font-size:${({theme}) => theme.fontSizes.medium};
  margin-top:-3rem;
}
`
const Info= styled.div`

h3{
  text-transform: uppercase;
  text-align:center;
  font-size:${({theme}) => theme.fontSizes.large};
  border-radius:${({theme}) => theme.borderradius.second};
  background:${({theme}) => theme.colors.vividblue};
  max-width:300px;
  padding:10px;
}
p{
  width:90%;
  line-height:1.8rem;
  font-size:${({theme}) => theme.fontSizes.medium};
  @media screen and (max-width:500px){
    padding-left:1rem;
  }
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
  font-size:${({theme}) => theme.fontSizes.medium};
}
  color: ${({theme}) => theme.colors.white};
  a{
  
    padding:4px;
    border-radius:${({theme}) => theme.borderradius.second};
    color: ${({theme}) => theme.colors.lightblue};
    font-weight:bold;
    text-decoration: none;
    &:hover{
      background:${({theme}) => theme.colors.brown};
    }   
  }
}
`


const RowOfArrows=styled.div`

${flex({direction: "row", align:"center", justify:"space-between"})}`

const Arrows = styled(Image)`
height: 40px;
width: 40px;
border-radius:${({theme}) => theme.borderradius.fourth};
padding:1rem;
&:hover{
  transform: skewY(5deg);
  
  background-color:${({theme}) => theme.colors.brown};
}
`
const ImageWrapper= styled.div`
width: 100%;
  .image--1 {
    object-fit: contain;
    width: 100%;
    height: 100%;
    @media screen and (max-width:600px){
      width:500px;
      height:400px;
      margin-left:-4rem;
    }
    @media screen and (max-width:500px){
      width:500px;
      margin-left: -5rem;
      left:0;
    }
  }
  .image--2{
    object-fit: contain;
    width: 100%;
    height: 100%;
    @media screen and (max-width:600px){
      width:500px;
      height:400px;
      margin-left:-4rem;
    }
    @media screen and (max-width:500px){
      width:500px;
      margin-left: -5rem;
      left:0;
    }
  }
  .image--3{
    object-fit: contain;
    width: 100%;
    height: 100%;
    @media screen and (max-width:600px){
      width:500px;
      height:400px;
      margin-left:-4rem;
    }
    @media screen and (max-width:500px){
      width:500px;
      margin-left: -5rem;
      left:0;
    }
  }
  .image--4{
    object-fit: contain;
    width: 100%;
    height: 100%;
    @media screen and (max-width:600px){
      width:500px;
      height:400px;
      margin-left:-4rem;
    }
    @media screen and (max-width:500px){
      width:500px;
      margin-left: -5rem;
      left:0;
      margin-bottom:-3rem;
    }
  }
  ${props => 
    props.firstPic && 
    css`
    margin-top:-3rem;
    position:relative;
    top:-2rem;

    `}
  
`
const CaseImage = styled(Image)`

`
const MoreInfo = styled.span`
padding:1rem;
@media screen and (${device.tablet}){
  width:80%;
}
font-size:20px;
line-height:150%;
`
const Tech = styled.div`
font-size:20px;
background-color: ${({theme}) => theme.colors.vividblue};
padding:1rem;
text-align:center;
ul{
  list-style:none;
}
border-radius:${({theme}) => theme.borderradius.second};
`


const Row= styled.div`

${flex({direction: "column-reverse"})}
@media screen and (${device.tablet}){
  ${flex({direction:"row", align:"flex-start"})}
}

`

const IndividualPage = ({array, id}) => {

  const [imageSize, setSmageSize] = useState({
    width: 500,
    height: 500
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
 
console.log(individual)

  return (
  <Detail>
    {individual.map(item => (
      <article key={item.id}>
        <Wrapper>
         <h1>{item.title}</h1>
         <p>{item.sub}</p>
         </Wrapper>
        
         <Info>
          <h3>Om projektet:</h3>
          <p>{item.text}</p>
         
         </Info>
         <ImageContainer>
         
         <ImageWrapper
         >
          
        <CaseImage
        layout="responsive"
        className="image--1"
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
         <p>{item.moreinfo.text1}<br/>{item.moreinfo.text1part2}</p>
        </MoreInfo>
       
        <ImageWrapper
         second>
       
         <CaseImage 
         layout="fill"
         className="image--2"
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
         <ImageWrapper
         first>
          
        <CaseImage
        layout="responsive"
        className="image--3"
        onLoadingComplete={target => {
          setSmageSize({
            width: target.naturalWidth,
            height: target.naturalHeight
          });
         }}
        width={imageSize.width}
        height={imageSize.height}
         alt= {item.extra.file02.alt}
         src={item.extra.file02.url}
         />
     
         </ImageWrapper>
       
         <MoreInfo>
         <p>{item.moreinfo.text1part3}</p>
        </MoreInfo>
        
       
        <ImageWrapper
         first>
          
        <CaseImage
        layout="responsive"
        className="image--4"
        onLoadingComplete={target => {
          setSmageSize({
            width: target.naturalWidth,
            height: target.naturalHeight
          });
         }}
        width={imageSize.width}
        height={imageSize.height}
         alt= {item.extra.file03.alt}
         src={item.extra.file03.url}
         />
       
         </ImageWrapper>
        
        <Row>
          <Tech>
          <h3>Techstack:</h3>
          <ul>
          {item.moreinfo.teknik.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
          </Tech>
          <ProgressBar
          items= {item.moreinfo.languages}/>
         </Row>
        
         </ImageContainer>
        
        <Tags>
        <p>Se mer på <Link href={item.sources.github}>Github</Link> och/eller <Link href={item.sources.link}>här</Link></p>
          </Tags>
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