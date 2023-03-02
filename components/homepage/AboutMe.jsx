import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { Grid } from "../styles/Grid.styled";
import { Line } from "../styles/Line.styled";
import CountingUp from "./counter";
import { flex, device } from "../styles/Styles";
import GridWithQuotes from "./GridWithQuotes";

const MainSection = styled.section`
margin-bottom:${({theme}) => theme.paddingSizes.medium};
display:block;
`

const About = styled.div`
h2{
  font-family: Arya;
  font-size: ${({theme}) => theme.fontSizes.mediumlarge};
  color: ${({theme}) => theme.colors.white};
  text-transform: uppercase;
  line-height: 35px;
  border-radius: ${({theme}) => theme.borderradius.first};
  background-color:black;
  padding:2rem;
  transition: all .8s ease-out;
}
`
const GridTxt = styled.div`
padding-top: ${({theme}) => theme.paddingSizes.xlarge};
padding-left: ${({theme}) => theme.paddingSizes.xlarge};
display:grid;
grid-template-columns: .5fr 2fr;
justify-items:start;
align-items:start;
column-gap:1px;
p{
  padding-top:4rem;
  max-width:50%;
  font-family:Roboto;
  line-height:150%;
  font-size:${({theme}) => theme.fontSizes.medium};
}
`

const Numbers = styled.section`
font-size:  ${({theme}) => theme.fontSizes.medium};
font-family: Roboto;
line-height:150%;
position:relative;
left: 30%;
max-width:50%;
padding:2rem;
padding-left:4rem;
padding-bottom:5rem;
`
const BigNumber = styled.h3`
font-size:${({theme}) => theme.fontSizes.xlarge};
line-height:1em;
color:${({theme}) => theme.colors.white};
font-family: Arya;
font-weight: 500;
padding:2rem;
background-color: ${({theme}) => theme.colors.vividblue};
border-radius: ${({theme}) => theme.borderradius.first};
`
const Text = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
margin-top:-3em;
padding-right:1rem;
text-align:left;
width:80%;
line-height:150%;
`


const AboutMe = () => {


  return ( 
  <MainSection>
    <Container
    xlarge>
      <GridTxt>
      <About>
      <h2>OM MIG:</h2>
      </About>
      <p>
            Mitt namn är Tova Jertfelt. Jag har en kandidatexamen från Konstfack i Grafisk Design & Illustration, och har sedan dess jobbat med bland annat webb, copy, kommunikation, som digital producent, som webb- & bildredaktör, fotograf, skribent, layoutare och som frilansande grafisk formgivare, projektledare, konstnär, illustratör och ibland animatör. Jag har till exempel formgivit grafiska profiler (med UX-perspektiv), gjort logotyper, skapat mallar åt sociala medier, formgett årsrapporter, ritat serier & illustrerat nyheter i tidningar.

          Trots kreativa, utmanande och roliga yrkesroller så fann jag mig själv sökandes. Till slut hittade jag hem: jag älskar programmering!
          </p>
      </GridTxt>
    <Numbers> 
    <Container
    xlarge>
      <Grid numbers>
        <CountingUp
          number = {11}
          text = {"års erfarenhet som digital formgivare, både som frilans och anställd."}
        />
        <div>
        <BigNumber>2021</BigNumber>
        <Text>började jag studera frontendprogrammering genom Nackademin.</Text>
        </div>

      </Grid>
    </Container>
    </Numbers>
    <GridWithQuotes/>
    </Container>
  </MainSection> );
}
 
export default AboutMe;