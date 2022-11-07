import styled from "styled-components";
import Link from "next/link";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import Image from "next/image";
import { cases } from "../../data/cases.js";

const Content = styled.div`
min-height:100vh;
padding:1rem;
${flex}
font-family:Roboto;
font-size:${({theme}) => theme.fontSizes.medium};
h1{
  font-family:Arya;
  font-size:${({theme}) => theme.fontSizes.xlarge};
  color: ${({theme}) => theme.colors.lightblue};
  text-transform: uppercase;
  margin-bottom:-1rem;
}`



export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  
  const paths = data.map(ninja => {
    return {
      params: {id: ninja.id.toString()}
    }
  })

  

//version 2:
// const data = cases;
// console.log(data)
// const paths = data.map(item => {
//   return {
//     params: {id: item.id.toString()}
//   }
// })
// console.log("paths", paths)

  return {
    paths, 
    fallback: false, //visar 404 om man försöker gå in på en id som inte finns
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}




const Details = ({post}) => {
  return ( 
    <Container xlarge>
      <Content>
      <h1>Test </h1>
      <p>This is a test</p>
      </Content>
    </Container>
  );
}



export default Details;
