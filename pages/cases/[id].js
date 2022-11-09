import { useRouter } from "next/router";

import styled from "styled-components";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import {Grid} from "../../components/styles/Grid.styled"

//next and react
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect } from "react";


//firebase
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";

import IndividualPage from "../../components/cases/IndividualPage";


const Content = styled.section`
min-height:130vh;
${flex}
margin-top:5em;
}
`

const Page = () => {
  const router = useRouter()
  const {id} = router.query
  console.log(id)
  const [dataFb, setData] = useState(null)

  const getData = () => {
    const dbRef = ref(getDatabase());
  get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
    if (snapshot.exists()) {

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

  console.log("data:", dataFb)


 const [showBack, setBack] = useState(false)

 useEffect(() => {
  if (id >= 2){
    setBack(true)
   }
 },[])


  return (
    <Container xlarge>
       <Content>
      {!dataFb && <>...Laddar sidan</>}
      {dataFb && <IndividualPage
      array = {dataFb}
      id = {id}
      />}
      </Content>
      <div>
      {showBack && 
      <button ><Link href="">-</Link></button>
      }
      <button><Link href="">+</Link></button>
      </div>
      
    </Container>
  )
}

export default Page

//lägg in "nästa för att bläddra mellan id" kommer nog vara så att jag måste byta namn på 