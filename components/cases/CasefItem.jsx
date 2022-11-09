
import { useEffect, useState } from "react"
import { cases } from "../../data/cases"
import styled, {css} from "styled-components"
import Link from "next/link"

import { flex, device } from "../styles/Styles";
import Image from "next/image"


const CaseContainer = styled.article`
border-radius: 29px;
padding:1rem;
background-color:black;
font-family:Roboto;
${flex}
@media ${device.laptop}{
  padding:3rem;
}
`
const Links = styled.span`
line-height:1rem;
${flex({direction:"row"})}
gap:10px;
a{
  font-size:${({theme}) => theme.fontSizes.medium};
  text-decoration:none;
  color: ${({theme}) => theme.colors.lightblue};
  &:hover{
    color: ${({theme}) => theme.colors.white};
    text-decoration:underline;
  }
}
@media ${device.tablet}{
  line-height:1.8rem;
}
padding-bottom:2em;
`

const CaseHeader = styled.h3`
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
text-transform: uppercase;
font-size:${({theme}) => theme.fontSizes.mediumlarge};
margin-top:-2rem;
`
const Description = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
width:90%;
`

const Tags = styled.p`
color: ${({theme}) => theme.colors.white};
margin-top:-1rem;
font-size:${({theme}) => theme.fontSizes.mediumsmall};
width:90%;
margin-top:-3rem;
`

const Subtitle = styled.h4`
font-size:${({theme}) => theme.fontSizes.medium};
text-transform:uppercase;
`

const CaseImages = styled(Image)`
width:100%;
${props => 
  props.first && 
  css`
&:hover{
  border-radius: ${({theme}) => theme.borderradius.first};
  opacity:90%;
}
&:focus{
   
  border-radius: ${({theme}) => theme.borderradius.first};
  opacity:90%;
}
&:active{

border-radius: ${({theme}) => theme.borderradius.first};
opacity:100%;
}
  `}
${props => 
  props.second && 
  css`
  &:hover{
    border-radius: ${({theme}) => theme.borderradius.third};
    opacity:90%;
  }
  &:focus{
   
      border-radius: ${({theme}) => theme.borderradius.third};
      opacity:90%;
  }
  &:active{
   
    border-radius: ${({theme}) => theme.borderradius.third};
    opacity:100%;
}
  `}
`
const Images = styled.span`
${flex}
gap:2rem;
@media ${device.laptop}{

  ${flex({direction:"row"})}
}`
 

const CasefItem = ({ item, index}) => {


 

  return (
    <CaseContainer
    key={index}>
      <Subtitle>{item.sub}</Subtitle> 
      <CaseHeader>    
        <Link href={'/cases/' + item.id} 
    state={{data: item.id}}
    key={item.id}
    >{item.title}
    </Link>
    </CaseHeader>

    <Link href={'/cases/' + item.id} 
    state={{data: item.id}}
    key={item.id}
    >
    <Images 
      arial-label="buttons">
      <CaseImages first
      width={300}
      height={300}
      src={`${item.sources.imgurl}`}
      alt="Printscreen"/>
      <CaseImages second
      width={300}
      height={300}
      src={`${item.extra.file01.url}`}
      alt="Printscreen"/>
      </Images>
      <Description>{item.text}</Description>
      
    </Link>
    <Links>
        <Link href= {item.sources.link}>Se mer </Link>
        <Link href= {item.sources.github}>/Github</Link>
      </Links>
    </CaseContainer>
  );
}
export default CasefItem;




// 