import styled from "styled-components";
import Link from "next/link";
import {cases } from "../../data/cases";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import {Grid} from "../../components/styles/Grid.styled"
import Image from "next/image";

const Content = styled.section`
min-height:130vh;
${flex}
font-family: Roboto;

h1{
  font-family:Arya;
  font-size:${({theme}) => theme.fontSizes.large};
}

a{
  text-decoration: none;
  color: ${({theme}) => theme.colors.lightblue};
  padding:2rem;
  background-color: ${({theme}) => theme.colors.purple};
  border-radius:29px;
  text-align:center;
  &:hover{
    color: ${({theme}) => theme.colors.white};
    border-radius:${({theme}) => theme.borderradius.third};
    
  }
}
.first{
  &:hover{
  border-radius:${({theme}) => theme.borderradius.first};
 
  }
}
.second{
  &:hover{
    border-radius:${({theme}) => theme.borderradius.second};
  
    }
}
`

export const getStaticProps = async () => {
  const res =  await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props:{ cases: data}
  }
}



const Cases = ({cases}) => {
  return (
    <Container xlarge>
      <Content>
      <h1>All Cases</h1>
      <Grid>
      {cases.map(c => {
        if((c.id %2=== 0)){
          return   <Link href={'/cases/' + c.id} 
          key={c.id}
          className="first">
              <h3>{c.name}</h3>
              <p>{c.email}</p>
          </Link>
        }
        else if ((c.id %3=== 0)){
          return   <Link href={'/cases/' + c.id} 
          key={c.id}
          className="second">
              <h3>{c.name}</h3>
          </Link>
        }
        else {
          return   <Link href={'/cases/' + c.id} 
          key={c.id}
          >
              <h3>{c.name}</h3>
          </Link>
        }
      
      })}
      </Grid>
      </Content>
    </Container>
  );
}
 
export default Cases;
