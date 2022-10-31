import { useEffect, useState } from "react"
import { cases } from "../../data/cases"
import styled from "styled-components"
import Link from "next/link"
import svenhippan from "../../public/img/smalin--1.png"


const CaseList = styled.article`
display:flex;
flex-direction:column;
column-gap:3rem;
padding-left:4rem;
width:100%;
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
max-width:34%;`

const Links = styled.span`
display:flex;
flex-orientation: column;
line-height:1rem;
a{
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
font-size:${({theme}) => theme.fontSizes.large};
line-height:1rem;
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
text-transform: uppercase;
`
const Description = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
width:60%;
`

const Tags = styled.p`
color: ${({theme}) => theme.colors.lightblue};
;
`

const Subtitle = styled.h4`
text-transform:uppercase`
 
const ShowCases = () => {
  const [newcases, setCases] = useState([])
  useEffect(() => {
    const featured = cases.filter(item => (item.featured === true))
    console.log(featured)
    setCases(featured)
  }, [])

  return (
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
   

    </CaseContainer>
  ))}
  </CaseList>
  );
}
 
export default ShowCases;


//https://stackoverflow.com/questions/65362902/loading-image-location-from-json-file-dynamically-cannot-find-module-reac