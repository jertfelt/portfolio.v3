import styled, {css} from "styled-components";
import {flex, device} from "../components/styles/Styles"
import {Container} from "../components/styles/Container.styled.js"
import {Line} from "../components/styles/Line.styled"
import {Grid} from "../components/styles/Grid.styled";

const Content = styled.section`
${flex}
font-family:Roboto;
padding-left:4rem;`

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
      <Grid cv>
        <GridItem education> <p>Lorem ipsym</p></GridItem>
        <GridItem> <p>Lorem ipsym</p></GridItem>
        <GridItem> <p>Lorem ipsym</p></GridItem>
        <GridItem> <p>Lorem ipsym</p></GridItem>
        </Grid>
      </CVContent>
      </Education>
      </Content>
    </Container>
   );
}
 
export default CVpage;