import styled from "styled-components";
import Link from "next/link";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import Image from "next/image";

const Content = styled.div`
min-height:100vh;
padding:1rem;
${flex}
font-family:Roboto;
font-size:${({theme}) => theme.fontSizes.medium};
h1{
  margin-top:-3em;
  font-family:Arya;
  font-size:${({theme}) => theme.fontSizes.xlarge};
  color: ${({theme}) => theme.colors.lightblue};
  text-transform: uppercase;
  margin-bottom:-1rem;
}`

const Details = () => {
  return ( 
    <Container xlarge>
      <Content>
      <h1>Test</h1>
      <p>This is a test</p>
      </Content>
    </Container>
  );
}

export default Details;
