import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { Grid } from "../styles/Grid.styled";
import { Line } from "../styles/Line.styled";
import { TwoColumns, Column } from "../styles/TwoColumns.styled";
import CountingUp from "./counter";
import { flex, device } from "../styles/Styles";

const MainSection = styled.section`
margin-bottom:${({theme}) => theme.paddingSizes.small};
display:block;
margin-top:-3rem;
`

const About = styled.div`
padding-top: ${({theme}) => theme.paddingSizes.small};
margin-left: ${({theme}) => theme.paddingSizes.large};



h2{
  font-family: Arya;
  font-size: ${({theme}) => theme.fontSizes.mediumlarge};
  color: ${({theme}) => theme.colors.lightblue};
  text-transform: uppercase;
  line-height: 35px;
}
`
const Quote = styled.h3`
padding-bottom:2rem;
color: ${({theme}) => theme.colors.lightblue};
font-size: ${({theme}) => theme.fontSizes.large};
margin-left:1rem;
font-family: Arya;
line-height:1.1em;
flex-wrap: wrap;
text-align: left;
`
const Numbers = styled.section`
margin-top:-3rem;
margin-bottom: 5em;
font-size:  ${({theme}) => theme.fontSizes.medium};
font-family: Roboto;
padding-left:4rem;
line-height:150%;
`
const BigNumber = styled.h3`
font-size:${({theme}) => theme.fontSizes.xlarge};
line-height:1em;
color:${({theme}) => theme.colors.lightblue};
font-family: Arya;
font-weight: 500;
`
const Text = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
margin-top:-3em;
padding-right:1rem;
text-align:left;
width:80%;
line-height:150%;
`

const WhoAmI = () => {
  return ( 
  <MainSection>
    <Container
    xlarge>
       <About>
      <h2>OM MIG:</h2>
     </About>
      <TwoColumns>
        <Column 
        whoamI_1>
          <p>
            Mitt namn är Tova Jertfelt. Jag har en kandidatexamen från Konstfack i Grafisk Design & Illustration, och har sedan dess jobbat med bland annat webb, copy, kommunikation, som digital producent, som webb- & bildredaktör, fotograf, skribent, layoutare och som frilansande grafisk formgivare, projektledare, konstnär, illustratör och ibland animatör. Jag har till exempel formgivit grafiska profiler (med UX-perspektiv), gjort logotyper, skapat mallar åt sociala medier, formgett årsrapporter, ritat serier & illustrerat nyheter i tidningar.
          </p>
          <p>
          Trots kreativa, utmanande och roliga yrkesroller så fann jag mig själv sökandes. Till slut hittade jag hem: jag älskar programmering!
          </p>
        </Column>
        <Column
        whoamI_2>
          <Quote>Jag älskar att jag nu kan få kombinera mina tre styrkor: problemlösning, kreativitet, osläckta nyfikenhet.</Quote>
        </Column>
      </TwoColumns>
    </Container>
    <Line></Line>
    <Numbers> 
    <Container
    xlarge>
      <Grid numbers>
        <CountingUp
          number = {10}
          text = {"års erfarenhet som digital formgivare, både som frilans och anställd."}
        />
        <div>
        <BigNumber>2021</BigNumber>
        <Text>började jag lära mig frontendprogrammering genom YH, vänner, discord och youtube. </Text>
        </div>
      </Grid>
    </Container>
    </Numbers>
  </MainSection>  );
}
 
export default WhoAmI;