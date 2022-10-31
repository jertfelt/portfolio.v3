import Image from "next/image"
import { Container } from "../styles/Container.styled";
import styled from "styled-components";
import illustratedbg from "../../public/img/bg.png"
import ShowCases from "./ShowCases"

const flexInst = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`
const Content = styled.div`
min-height:300vh;
font-family:Roboto;
width: 100%;
align-items:center;
justify-content:center;
div{
  ${flexInst ({ justify: "space-between"})};
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
  return (
    <Container
    xlarge>
      <Content>
      <div>
      <Headline>Cases</Headline>
      <p>Här finns ett urval av olika saker jag kodat. Jag har jobbat främst med JS, CSS, SASS, HTML, Node.js och React.</p>
      </div>
      <ShowCases/>
      </Content>
    </Container>
  );
}
 
export default CasesPage;