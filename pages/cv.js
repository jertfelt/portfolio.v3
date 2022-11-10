import styled, {css} from "styled-components";
import {flex, device} from "../components/styles/Styles"
import {Container} from "../components/styles/Container.styled.js"
import {Line} from "../components/styles/Line.styled"
import { useCallback, useEffect, useState } from "react";
import {Grid} from "../components/styles/Grid.styled";
import { getData, getFeaturedCases, getCaseByTag, getTest, getTestAsync, getCV } from "../components/api/cases";

const Content = styled.section`
padding: 5rem;
padding-top:5em;
${flex}
font-family:Roboto;
`
const Heading = styled.span`
${flex({align:"flex-start", justify:"space-around"})}
`
const Title = styled.h1`
font-family: Arya;
font-size:72px;
line-height:1rem;
margin-bottom:2rem;`
const CVContent=styled.div`
`
const Education =styled.div`
background-color:purple;
width:100%;`
const GridItem = styled.article`
background-color:red;
padding:1rem;
border-radius:19px;
max-width:100%;

${props => 
  props.education && 
  css`
  background-color:black;
  `}

  ${props => 
    props.job && 
    css`
    background-color:purple;
    `}
  
  `


const CVpage = () => {
const [workData, setWData] = useState([]);
const [education, setEData] = useState([])


const fetchData = useCallback(async () => {
  const newData = await getCV("work");
  setWData(newData)
  const ed = await getCV("education");
  setEData(ed)
})

useEffect(() => {
  fetchData().catch(console.error)
}, [])

console.log(workData, "work:", education, "ed")

  return ( 
    <Container xlarge>
      <Content>
        <Heading>
        <Title>CV</Title>
        <p>Lorem ipsym</p>
        </Heading>
      <Line/>
      <Education>
      <CVContent>
      <h2>Arbete:</h2>
      <Grid cv>
        {!workData && <>Laddar...</>}
        {workData && workData.map((item,index) =>(
        <GridItem 
        key={index}>
        <h3>{item.workplace}</h3>
        </GridItem>
        ))}
        </Grid>
      <h2>Utbildning:</h2>
      <Grid cv>
        {!education && <>Laddar...</>}
        {education && education.map((item,index) =>(
        <GridItem education
        key={index}>
        <h3>{item.school}</h3>
        </GridItem>
        ))}
        </Grid>
      
      </CVContent>
      </Education>
      </Content>
    </Container>
   );
}
 
export default CVpage;