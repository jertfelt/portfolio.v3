import Image from "next/image"
import { Container } from "../styles/Container.styled";
import styled from "styled-components";
import illustratedbg from "../../public/img/bg.png"
import ShowCases from "./ShowCases"
import { flex } from "../styles/Styles";

const Content = styled.div`
min-height:300vh;
font-family:Roboto;
width: 100%;
margin-top:2em;
padding-top:4rem;
div{
  ${flex ({justify: "space-between"})};
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
      <p>Här finns ett urval av olika saker jag kodat. En del är studentarbeten, andra är egna experiment.</p>
      </div>
      <ShowCases/>
      </Content>
    </Container>
  );
}
 
export default CasesPage;