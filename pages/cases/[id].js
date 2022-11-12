import { useRouter } from "next/router";

import styled from "styled-components";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import {Grid} from "../../components/styles/Grid.styled"
import { getData } from "../../components/api/cases.js";
//next and react
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect, useCallback } from "react";
import  backbutt from "../../public/icons/backbuttwhtie.png";
import  nextbutt from "../../public/icons/forwardbuttwhite.png";

import { cases } from "../../data/cases";
import IndividualPage from "../../components/cases/IndividualPage";
const casesDb = {cases};

const Content = styled.section`
min-height:130vh;
${flex}
margin-top:5em;
div{
  margin-top:2rem;
  width:80%;
}
`
const RowOfArrows=styled.div`
width:100%;

${flex({direction: "row", align:"center", justify:"space-between"})}`

const Arrows = styled(Image)`
height: 40px;
width: 40px;
&:hover{
  transform: skewY(5deg);
  background-color:${({theme}) => theme.colors.vividblue};
}
`



const Page = () => {
  const router = useRouter()
  let {id} = router.query 
  useEffect(() => {
    if(!router.isReady) return;
    
  }, [router.isReady])

  //*------from cases.js in data, instead of fb:
  const [cases, setCases] = useState(casesDb.cases)
  //fb:
  const [result, setResult] = useState(null)
  const fetchData = useCallback(async () => {
    const newData = await getData();
    setResult(newData)
  })
  useEffect(() => {
    fetchData().catch(console.error)
  }, [])


 const [showBack, setBack] = useState(false)
 const [showButts, setShowButts] = useState(true)
 const [showFront, setFront] = useState(true)
 let max = (cases.length);
 const next = Number(id)+1;
 const back = Number(id)-1; 
 console.log(max, id)
 
useEffect(() => {
  if (id === undefined){
    setShowButts(false)
    console.log("id was undefined")
  }
  else{
    setShowButts(true)
  }
},[id])


useEffect(() => {
  if (Number(id) >= 1){
    setBack(true)
    console.log(Number(id) >= 1)
  }
  if (Number(id) >= max){
    console.log(Number(id) >= max)
    setFront(false)
  }
},[id])



  return (
    <Container xlarge>
       <Content>
     
      {cases && <IndividualPage
      array = {cases}
      id = {id}
      />}
      <div>
      {showButts ? ( <RowOfArrows>
      {showBack && 
      <Link href={'/cases/' + back}>
        <Arrows src={backbutt}
        aria-label="button"
        alt="Bakåt"/>
        </Link>
      }
      {showFront &&
        <Link href={'/cases/' + next}>
        <Arrows src={nextbutt}
        aria-label="button"
        alt="Nästa"/></Link>
      }
      </RowOfArrows>
      )
      : (null)}
      </div>
      </Content>
      
      
    </Container>
  )
}

export default Page

//lägg in "nästa för att bläddra mellan id" kommer nog vara så att jag måste byta namn på 