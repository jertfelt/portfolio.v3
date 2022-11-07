import styled from "styled-components";
import Link from "next/link";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import {Grid} from "../../components/styles/Grid.styled"
import Image from "next/image";
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";
import {useState, useEffect } from "react";


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

//https://frontend-portfolio-446fc-default-rtdb.europe-west1.firebasedatabase.app/cases

export const getStaticProps = async () => {
  const res =  await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props:{ cases: data}
  }
}



const Cases = ({cases}) => {



// const getData = (route) => {    
//   const db = getDatabase()
//   const dbRef = ref(db, route)
//   onValue(dbRef, (snapshot) => {
//     setFirebaseData(snapshot.val().cases)
//   })
 
// }
const [dataFb, setData] = useState(null)

const getData = () => {
  const dbRef = ref(getDatabase());
get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log("array", snapshot.val());
   setData(snapshot.val())
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}

useEffect(() => {
  initFirebase("cases/");
  getData();
},[])

console.log(dataFb, "dataFB")


  return (
    <Container xlarge>
      <Content>
      <h1>All Cases</h1>
      <Grid>
       {dataFb && dataFb.map((c, index) => {
       
        if((index %2 === 0)){
          return   <Link href={'/cases/' + c.title} 
          key={c.id}
          className="first">
              {/* <Image src={c.sources.imgurl}
              width={100}
              height={100} 
              alt={c.sources}/> */}
              <h3> {c.title}</h3>
              <p> {c.sub}</p>
          </Link>
        }
        else if ((index %3 === 0)){
          return   <Link href={'/cases/' + c.title} 
          key={c.id}
          className="second">
              <h3>  {c.title}</h3>
              <p> {c.sub}</p>
          </Link>
        }
        else {
          return <Link href={'/cases/' + c.title} 
          key={c.id}
          > 
              <h3>{c.title}</h3>
              <p> {c.sub}</p>
          </Link>
        }
      
      })} 
      </Grid>
      </Content>
    </Container>
  );
}
 
export default Cases;
