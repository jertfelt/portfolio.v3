import { useEffect, useState } from "react"
import { cases } from "../../data/cases"
import styled from "styled-components"
import Link from "next/link"
import svenhippan from "../../public/img/smalin--1.png"
import ImageContainer from "./ImageContainer"

const Wrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:2rem;
padding-left:6rem;
`
const CaseList = styled.article`
max-width:1200px;

`
const CaseContainer = styled.article`
width:100%;
padding:2rem;
background-color:black;
font-family:Roboto;
margin-bottom:2rem;
`
// ${props => 
//   props.svenhippan && 
//   css`
//   background-image: url(${svenhippan})
//   `}

const Row= styled.span`
display:flex;
flex-orientation: row;
align-items:center;
justify-content:space-between;
`

const RowContainer = styled.span`
flex-orientation: column;
align-items:center;
justify-content:space-between;
max-width:30%;`

const Links = styled.span`
display:flex;
flex-orientation: column;
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
`

const CaseHeader = styled.h3`
padding-left:2rem;
font-size:${({theme}) => theme.fontSizes.large};
line-height:1rem;
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
text-transform: uppercase;
`
const Description = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
width:60%;
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
 
const ShowCases = () => {
  const [newcases, setCases] = useState([])
  useEffect(() => {
    const featured = cases.filter(item => (item.featured === true))
    console.log(featured)
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
      <ImageContainer
      image={`${item.sources.imgurl}`}
      name={item.id}
      description={item.sources.imgalt}/>
      <ImageContainer
      image={`${item.extra.file01.url}`}
      name={item.id}
      description={item.extra.file01.imgalt}/>
    </CaseContainer>
  ))}
  </CaseList>
  </Wrapper>
  );
}
 
export default ShowCases;


//https://stackoverflow.com/questions/65362902/loading-image-location-from-json-file-dynamically-cannot-find-module-reac