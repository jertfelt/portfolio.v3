import Image from "next/image"
import { Container } from "../styles/Container.styled";
import styled from "styled-components";
import illustratedbg from "../../public/img/bg.png"
import ShowCases from "./ShowCases"
import { flex } from "../styles/Styles";
import { useState, useEffect, useCallback } from "react";
import { getData } from "../api/cases";

const Content = styled.div`
min-height:100vh;
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

// const [cases, setCases] = useState(null)

// useEffect(() => {
//   initFirebase("cases/");
//   Get();
// },[])

// const Get = () => {
//   let cases = []
//   const dbRef = ref(getDatabase());
// get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
//   if (snapshot.exists()){
//     let data = snapshot.val()
// for (const key in data) {
//   cases.push({
//     id: key,
//     ...data[key]
//   })
//   }}
//   else {
//     console.log("Ingen data tillgänglig")
//   }
// }).catch((error) => {
//   console.error(error)
// })
// setCases(cases)
// }


const CasesPage = () => {
  const [cases, setAllData] = useState([])

  const fetchData = useCallback(async () => {
    const newData = await getData();
    console.log(newData, "test2")
    setAllData(newData)
  })
  
  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  return (
    <Container
    xlarge>
      <Content>
      <div>
      <Headline>Cases</Headline>
      <p>Här finns ett urval av olika saker jag kodat. En del är studentarbeten, andra är egna experiment.</p>
      </div>
      <ShowCases
      cases={cases}/>
      </Content>
    </Container>
  );
}
 
export default CasesPage;