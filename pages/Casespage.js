import Image from "next/image"
import { Container } from "../components/styles/Container.styled";
import styled, {css} from "styled-components";
import { useState, useEffect, useCallback, useReducer } from "react";
import { getData } from "../components/api/cases";
import CasefItem from "../components/cases/CasefItem";
import Link from "next/link";
import { flex, device } from "../components/styles/Styles";
import { cases } from "../data/cases";


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
  }
}
`
const Desc = styled.p`
  padding:2rem;
  flex-wrap:wrap;
  line-height:1.8rem;
  max-width:70%;
  a{
    color:${({theme}) => theme.colors.lightblue};
    text-decoration:none;
    font-weight:bold;
    &:hover{
      text-decoration:underline;
    }
`

const Headline = styled.h2`
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
font-size:${({theme}) => theme.fontSizes.xlarge};
text-transform: uppercase;
`

const Wrapper = styled.div`
${flex}
padding:3rem;
`
const CaseList = styled.article`
p{
  line-height:1.8rem;
  flex-wrap:wrap;
}
max-width:1000px;
margin: 0 auto;
padding-left:3rem;
display: grid;
gap: 3rem; 
@media ${device.tablet}{
  grid-template-columns: repeat(2, 1fr); 
}
`

const CasesPage = () => {
const [loading, setLoading] = useState(false)
  //*------from cases.js in data, instead of fb:
const [cases, setCases] = useState(casesDb.cases)
const [result, setResult] = useState(null)
const [featuredCases, setFeatured] = useState(null);
let featured = []

const checkCases = (data) => {
  console.log(data, "checkC")
if(!cases){
    setCases(data) 
  }
  else{
   console.log()
  }
}


const fetchData = useCallback(async () => {
  const newData = await getData()
  return newData
})

useEffect(() => {
  setLoading(true)
  fetchData().then
    ((data) => {
      checkCases(data)
    }
    ).then(() => {
     
      featured.push(cases.filter(item => item.featured === true))
      const doubled = featured.map(nested => nested.map(element => element))
      setFeatured(doubled[0])
      return doubled[0]
    }).then(() => {  
      setLoading(false);
    }).catch(console.error)
}, [])
console.log(cases, "or this goes")
console.log(featuredCases, "this will go")


return (
    <Container
    xlarge>
      <Content>
      <div>
      <Headline>Cases</Headline>
      <Desc>Här finns ett urval av olika saker jag kodat. En del är studentarbeten, andra är egna experiment. För att se alla mina projekt, och filtrera på sökord, gå till <Link href="/cases/"> CASES</Link>.
      </Desc>
      </div>
      {loading ? <><h2>Laddar sidan...</h2></> :
      <>
     
      {featuredCases && 
      <Wrapper>
  <CaseList>
  {featuredCases.map((c) => 
          (
          <CasefItem
          key={c.id}
          item= {c}
          index={c.id}
          />
          ) 
        )}
        
   {!featuredCases && 
      <Wrapper>
        <CaseList>
        {cases.map(c => 
                (
                <CasefItem
                key={c?.id}
                item= {c}
                index={c?.id}
                />
                ) 
              )}
        </CaseList>
      </Wrapper>}
  </CaseList>
  </Wrapper> }
  </>}
      </Content>
    </Container>
  );
}

export default CasesPage;