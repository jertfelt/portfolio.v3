import { useRouter } from "next/router";

import styled from "styled-components";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import { getData } from "../../components/api/cases.js";
//next and react

import {useState, useEffect, useCallback } from "react";
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


  return (
    <Container xlarge>
      <Content>
      {cases && <IndividualPage
      array = {cases}
      id = {id}
      />}
      </Content>
    </Container>
  )
}

export default Page

