import Image from "next/image"
import { Container } from "../styles/Container.styled";
import styled from "styled-components";
import illustratedbg from "../../public/img/bg.png"
import ShowCases from "./ShowCases"
import { flex } from "../styles/Styles";
import { useState, useEffect, useCallback } from "react";
import { getData } from "../api/cases";
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";
import { cases } from "../../data/cases";
const casesDb = {cases};

const Content = styled.div`
min-height:100vh;
font-family:Roboto;
width: 100%;
margin-top:2em;
padding-top:4rem;
div{
  ${flex ({justify: "space-between"})};
  width:100%;
  p{
    padding:2rem;
    flex-wrap:wrap;
    line-height:1.8rem;
  }
}
`

const Headline = styled.h2`
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
font-size:${({theme}) => theme.fontSizes.xlarge};
text-transform: uppercase;
margin-bottom:-2rem;`



const CasesPage = () => {
const [errorMsg, setErrorMsg] = useState(false);
const [loading, setLoading] = useState(false)
  //*------from cases.js in data, instead of fb:
const [local, setLocal] = useState(casesDb.cases)
const [cases, setCases] = useState(null)
const [result, setResult] = useState(null)
const [featuredCases, setFeatured] = useState(null);
let featured = []

const checkCases = (data) => {
  console.log(data, "checkC")
  console.log(cases, "cases")
if(!cases){
  if(result){
    setCases(data)
    console.log(result, "result")
  }
  else if(local){
    setCases(local)
  }
  else{
    setErrorMsg(true)
  }
}
else{
  setErrorMsg(false)
}
}

const fetchData = useCallback(async () => {
  const newData = await getData();
  return newData
})

useEffect(() => {
  fetchData().then
    ((data) => {
      console.log(data, "fetched")
      checkCases(data)
    }
    ).then(() => {
      console.log(cases, "test")
      featured.push(cases.filter(item => item.featured === true))
      const doubled = featured.map(nested => nested.map(element => element))
      setFeatured(doubled[0])
      return doubled[0]
    }).catch(console.error)
  
}, [])

console.log(featuredCases, "this will go")
console.log(cases, "or this goes")

 return (
    <Container
    xlarge>
      <Content>
      <div>
      <Headline>Cases</Headline>
      <p>Här finns ett urval av olika saker jag kodat. En del är studentarbeten, andra är egna experiment.</p>
      </div>
      {!featuredCases &&  <ShowCases
      cases={cases}/>}
      {featuredCases && <ShowCases
      cases={featuredCases}/> }
      </Content>
    </Container>
  );
}
 
export default CasesPage;



  // useEffect(() => {
  //   featured.push(cases.filter(item => item.featured === true))
  //   console.log(featured, "?")
  // },[])

 
// useEffect(() => {
//   const doubled = featured.map(nested => nested.map(element => element));
//   return setFeatured(doubled[0])
// }, [])