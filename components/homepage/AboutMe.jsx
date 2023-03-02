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
grid-template-columns: 1fr 2fr;
justify-items:start;
align-items:start;
column-gap:1px;
p{
  padding-top:4rem;
  max-width:60%;
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
            Mitt namn är Tova Jertfelt. Jag har en kandidatexamen från Konstfack i Grafisk Design & Illustration, och har sedan dess jobbat med bland annat webb, copy, kommunikation, som digital producent, som webb- & bildredaktör, fotograf, skribent, layoutare och som frilansande grafisk formgivare, projektledare, konstnär, illustratör och ibland animatör. Jag har till exempel formgivit grafiska profiler (med UX-perspektiv), gjort logotyper, skapat mallar åt sociala medier, formgett årsrapporter, ritat serier & illustrerat nyheter i tidningar.<br/>
          Trots kreativa, utmanande och roliga yrkesroller så fann jag mig själv sökandes. Till slut hittade jag hem: jag älskar programmering! <br/>
          Som person är jag driven, och gillar att problemlösa. Jag försöker att se vägen framåt i alla situationer, och jag tycker om att experimentera. Efter många års erfarenhet av att både få, och ge, feedback upplever jag att jag är en bra team-medarbetare och jag uppskattar att få jobba i team där jag får bli hörd. Jag är väldigt självständig som person, och känner att tillit är oerhört viktigt. Under min studietid har jag jobbat hybrid, mestadels hemifrån, och när jag jobbar så är det med disciplin. Faktum är att jag kan ha så roligt när jag kodar att jag har svårt att sluta jobba för dagen! Jag är också nyfiken och lär mig gärna mer, det finns en särskild njutning i att upptäcka nya saker till exempel. Här tror jag att mitt personliga intresse för improvisationsteater kan spela in: att vara flexibel och tänka snabbt är bra när man felsöker och när man jobbar i agila projekt, men också att våga testa saker känns som A och O. Jag har höga krav på mitt arbete, men gillar inte prestige, jag föredrar ärlighet och ödmjukhet. Jag tycker om att bolla idéer och kod, vill vara transparent, och har inte problem med att be om hjälp när jag behöver den. Samma sak med att ge hjälp! <br></br>Vidare är jag analytisk. Jag ser mönster i allt det jag gör, och kan därför någorlunda lätt bedöma vart jag är på väg och varför, samt se risker med pågående projekt. Efter mina tidigare år som formgivare har jag också kännedom kring tillgänglighet, färg och form.
          </p>
          <p>Jag letar efter jobb!</p>
          <p>Min utbildning tar slut i maj 2023. Tills dess vill jag börja jobba! Jag letar efter en arbetsplats som kan ta emot mig som junior frontendare, som har högt i tak, som låter mig växa både självständigt och i ett team. Jag kan idag React, Next, och javascript. Jag har även tittat på node.js, mongoose, CMS-system, hosting, jest, och Google firebase som databas. <br/>
          Jag lever i Uppsala med sambo och barn, så jag letar framför allt efter jobb som kan vara hybrid. </p>
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