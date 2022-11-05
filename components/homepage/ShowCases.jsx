import { useEffect, useState } from "react"
import { cases } from "../../data/cases"
import styled, {css} from "styled-components"
import Link from "next/link"

import { flex, device } from "../styles/Styles";
import Image from "next/image"

const Wrapper = styled.div`
width:100%;
${flex}
padding:2rem;
@media ${device.tablet}{
  padding-left:6rem;
}
`
const CaseList = styled.article`
max-width:1200px;
margin: 0 auto;
display: grid;
gap: 2rem;
@media ${device.laptop}{
  grid-template-columns: repeat(2, 1fr); 
}
`
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

const Row= styled.span`
${flex};
@media ${device.tablet}{
  ${flex({direction: "row", justify:"space-between"})};
}
@media ${device.laptop}{
  ${flex({direction: "row", align: "flex-start", justify: "space-around"})};
}
`

const RowContainer = styled.span`
${flex({align:"flex-start",justify:"space-between"})};
max-width:80%;
@media ${device.laptop}{
  max-width:30%;
  ${flex({align:"center", justify:"space-between"})}
}`

const Links = styled.span`
line-height:1rem;
a{
  font-size:${({theme}) => theme.fontSizes.medium};
  text-decoration:none;
  color: ${({theme}) => theme.colors.lightblue};
  margin-top:-2px;
  margin-right:3rem;
  &:hover{
    color: ${({theme}) => theme.colors.white};
    text-decoration:underline;
  }
}
@media ${device.tablet}{
  line-height:1.8rem;
  margin:0;
  
}
`

const CaseHeader = styled.h3`
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
text-transform: uppercase;
font-size:${({theme}) => theme.fontSizes.large};
margin-left:-300px;
@media ${device.laptop}{
  flex-wrap: wrap;
  max-width:50%;
  font-size:${({theme}) => theme.fontSizes.large};
  line-height:2rem;
  margin:0;
}
@media ${device.tablet}{
  flex-wrap: wrap;
  max-width:50%;
  font-size:${({theme}) => theme.fontSizes.large};
  line-height:2rem;
  margin-top:1rem;
}
`
const Description = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
width:90%;
margin-top:-4rem;
`

const Tags = styled.p`
color: ${({theme}) => theme.colors.white};
margin-left:-2rem;
margin-top:-1rem;
`

const Subtitle = styled.h4`
font-size:${({theme}) => theme.fontSizes.medium};
text-transform:uppercase
`

const ImageContainer = styled.span`
${flex}
gap:30px;
img{
  width:100%;
}
margin-bottom:3rem;
@media ${device.tablet}{
  ${flex({direction:"row"})}
}`

const CaseImages = styled(Image)`
${props => 
  props.first && 
  css`
&:hover{
  border-radius: ${({theme}) => theme.borderradius.first};
  opacity:90%;
}
  `}
${props => 
  props.second && 
  css`
  &:hover{
    border-radius: ${({theme}) => theme.borderradius.second};
    opacity:90%;
  }
  `}
`

 
const ShowCases = () => {
  const [newcases, setCases] = useState([])
  useEffect(() => {
    const featured = cases.filter(item => (item.featured === true))
    setCases(featured)
  }, [])

  const basePath = "/img/"

  return (
    <Wrapper>
  <CaseList>
  {newcases.map(item => (
    <CaseContainer
    key={item.id}>
      <Row>
      <CaseHeader>{item.headline}</CaseHeader>
      <RowContainer>
      <Subtitle>{item.subtitle}</Subtitle>
      <Links>
        <Link href= {item.sources.link}>Se mer </Link>
        <Link href= {item.sources.github}>Github</Link>
      </Links>
      <Tags>{item.tags}</Tags>
      </RowContainer>
      </Row>
      <Description>{item.description}</Description>
      <ImageContainer>
      <CaseImages
      first
      width={300}
      height={300}
      src={`${item.sources.imgurl}`}
      alt={item.sources.imgalt}/>
     
      <CaseImages
      second
      width={300}
      height={300}
      src={`${item.extra.file01.url}`}
      alt={item.extra.file01.imgalt}/>
  </ImageContainer>
    </CaseContainer>
  ))}
  </CaseList>
  </Wrapper>
  );
}
 
export default ShowCases;


//https://stackoverflow.com/questions/65362902/loading-image-location-from-json-file-dynamically-cannot-find-module-reac