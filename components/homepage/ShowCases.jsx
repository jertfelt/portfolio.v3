import { useEffect, useState } from "react"
import { cases } from "../../data/cases"
import styled, {css} from "styled-components"
import Link from "next/link"

import { flex, device } from "../styles/Styles";
import Image from "next/image"
//firebase
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";
import O2A from "../objectToArray";
import CaseItem from "../cases/CaseItem";
import Featured from "../cases/Featured";

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
@media ${device.desktop}{
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
const Images = styled.span`
${flex}
gap:2rem;
@media ${device.laptop}{

  ${flex({direction:"row"})}
}`
 
const ShowCases = () => {
  const [newcases, setCases] = useState([])
  const [dataFb, setData] = useState([])

  const getData = () => {
    const dbRef = ref(getDatabase());
  get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
    if (snapshot.exists()) {
      const val = snapshot.val();
      setData(val)
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  }
  
useEffect(() => {
  initFirebase("cases/");
  getData();
},[])


// const dev = dataFb.filter(obj => obj.include("react").map(obj => ({"name": obj.title, "test:": obj.id})))
// console.log(dev)
  useEffect(() => {
    const featured = cases.filter(item => (item.featured === true))
    setCases(featured)
  }, [])




  return (
  <Wrapper>
  <CaseList>
    <>{!dataFb && <>...Laddar!</>}
    {dataFb && 
    <Featured
    array = {dataFb}/>}
    </>
  {/* {newcases.map(item => (
    <CaseContainer
    key={item.id}>
        <Subtitle>{item.subtitle}</Subtitle>
      <CaseHeader>{item.headline}</CaseHeader>
      <Link href="/">
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
      </Link>
      <Description>{item.description}</Description>
      <Tags>{item.tags}</Tags>
      <Links>
        <Link href= {item.sources.link}>Se mer </Link>
        <Link href= {item.sources.github}>Github</Link>
      </Links>
      
    </CaseContainer>
  ))} */}
  </CaseList>
  </Wrapper>
  );
}
 
export default ShowCases;


//https://stackoverflow.com/questions/65362902/loading-image-location-from-json-file-dynamically-cannot-find-module-reac