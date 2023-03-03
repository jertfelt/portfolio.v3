import Image from "next/image"
import { Container } from "../styles/Container.styled";
import styled, {css} from "styled-components";
import { useState, useEffect, useCallback, useReducer } from "react";
import { getData } from "../api/cases";
import CasefItem from "../cases/CasefItem";
import Link from "next/link";
import { flex, device } from "../styles/Styles";
import { cases } from "../../data/cases";


const casesDb = {cases};

const Content = styled.div`
font-family:Roboto;
width: 100%;
padding-bottom:5rem;
div{
  ${flex };
  width:100%;
  }
}
background-color: ${({theme}) => theme.colors.grey};
position: relative;
z-index:1;

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 75%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
`
const Desc = styled.p`
  flex-wrap:wrap;
  line-height:150%;
  max-width:50%;
  text-align:center;
  font-size: ${({theme}) => theme.fontSizes.medium};
  a{
    color:${({theme}) => theme.colors.lightblue};
    text-decoration:none;
    font-weight:bold;
    &:hover{
      background-color: ${({theme}) => theme.colors.black};
      border-radius: ${({theme}) => theme.borderradius.first};
    }
`

const Headline = styled.h2`
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
font-size:${({theme}) => theme.fontSizes.xlarge};
text-transform: uppercase;
background-color: ${({theme}) => theme.colors.black};
border-radius: ${({theme}) => theme.borderradius.first};
padding:2rem;
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
// @media ${device.tablet}{
//   grid-template-columns: repeat(2, 1fr); 
// }
`

const CasesPage = () => {
const [loading, setLoading] = useState(false)
  //*------from cases.js in data, instead of fb:
const [cases, setCases] = useState(casesDb.cases)
const [featuredCases, setFeatured] = useState(null);
let featured = []

const checkCases = (data) => {
 
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


return (
    <Container
    xlarge>
      <Content>
      <div>
      <Headline>Cases</Headline>
      <Desc>Här finns ett urval av olika saker jag kodat.<br/> En del är studentarbeten, andra är egna experiment. <br/>För att se alla mina projekt, och filtrera på sökord, gå till <Link href="/cases/"> CASES</Link>.
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