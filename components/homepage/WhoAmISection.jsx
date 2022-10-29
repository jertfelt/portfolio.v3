import styled from "styled-components";
import { Container } from "../styles/Container.styled";
import { Grid } from "../styles/Grid.styled";

const MainSection = styled.section`
margin-bottom:${({theme}) => theme.paddingSizes.small};
display:block;`

const About = styled.div`
padding-top: ${({theme}) => theme.paddingSizes.small};
margin-left: ${({theme}) => theme.paddingSizes.medium};
align-self: strecth;
justify-self: start;
h2{
  font-family: Arya;
  font-size: ${({theme}) => theme.fontSizes.mediumlarge};
  padding-left:1rem;
  color: ${({theme}) => theme.colors.lightblue};
  text-transform: uppercase;
  line-height: 55px;
}
`

const WhoAmI = () => {
  return ( 
  <MainSection>
    <Container
    xlarge>
      <Grid>
     <About>
      <h2>OM MIG:</h2>
     </About>
      </Grid>
    </Container>
  </MainSection>  );
}
 
export default WhoAmI;