
import { useEffect, useState } from "react"
import styled, {css} from "styled-components"
import Link from "next/link"
import { flex, device } from "../styles/Styles";

import ImageContainer from "../image/ImageContainer";


const CaseContainer = styled.article`
border-radius: 29px;
padding:1rem;
background-color:black;
font-family:Roboto;
${flex}
@media ${device.laptop}{
  padding:3rem;
}
a{
  text-decoration: none;
  color:${({theme}) => theme.colors.lightblue};
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
const Subtitle = styled.h4`
font-size:${({theme}) => theme.fontSizes.medium};
text-transform:uppercase;
`

const CasefItem = ({item, index}) => {

  return (
    
    <CaseContainer key={item.id}
    >
     {item && <>
      <Subtitle>{item.sub}</Subtitle> 
        <CaseHeader>    
          <Link href={'/cases/' + item.id} 
                state={{data: item.id}}
                key={item.id}>
                {item.title}
          </Link>
      </CaseHeader> 

    <Link href={'/cases/' + item.id} 
    key={item.id}
    >
     {/* <ImageContainer
    id = {item.id}
    />  */}
     <Description>{item.text}</Description>
      
      </Link>
      
    <Links>
        {/* <Link href= {item.sources.link}>Se mer </Link>
        <Link href= {item.sources.github}>/Github</Link> */}
      </Links> 
      </>
     }
     {!item && <div>Något har gått fel.</div>}
      </CaseContainer>
   

  );
}
export default CasefItem;




// 