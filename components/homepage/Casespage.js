import { Container } from "../styles/Container.styled";
import styled from "styled-components";
import { useState, useEffect, useCallback,} from "react";
import { getData } from "../api/cases";
import CasefItem from "../cases/CasefItem";
import Link from "next/link";
import { flex, device } from "../styles/Styles";
import { cases } from "../../data/cases";

const casesDb = {cases};

const Content = styled.div`
font-family:Roboto;
min-height:130vh;
div{
  ${flex };
  }
}
background-color: ${({theme}) => theme.colors.lavendel};
position: relative;
z-index:10;
padding-bottom:15rem;
@media screen and ${device.maxtablet}{ padding:3rem;}
@media screen and ${device.maxmobile}{ padding:1rem;}

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 100%;
  width:100%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -2;
}
`
const Desc = styled.p`
  flex-wrap:wrap;
  line-height:150%;
  max-width:50%;
  text-align:center;
  font-size: ${({theme}) => theme.fontSizes.medium};
  a{
    color:${({theme}) => theme.colors.vividblue};
    text-decoration:none;
    font-weight:bold;
    &:hover{
      background-color: ${({theme}) => theme.colors.lightblue};
      border-radius: ${({theme}) => theme.borderradius.first};
    }
`

const Headline = styled.h2`
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
font-size:${({theme}) => theme.fontSizes.xlarge};
text-transform: uppercase;
background-color: ${({theme}) => theme.colors.vividblue};
border-radius: ${({theme}) => theme.borderradius.third};
padding:1rem;
margin-bottom:0;
`

const Wrapper = styled.div`
${flex}
`
const CaseList = styled.article`
border: solid 2px;
border-radius:29px;
border-color: ${({theme}) => theme.colors.vividblue};
p{
  line-height:1.8rem;
  flex-wrap:wrap;
}
max-width:900px;
margin: 0 auto;
display: grid;
gap: 3rem; 
@media screen and ${device.maxmobile}{
  border: none;}
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