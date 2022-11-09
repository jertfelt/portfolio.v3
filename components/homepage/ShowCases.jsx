import { useEffect, useState } from "react"
import { cases } from "../../data/cases"
import styled, {css} from "styled-components"
import Link from "next/link"

import { flex, device } from "../styles/Styles";

//firebase
import { getDatabase, ref, get, child, onValue } from "firebase/database"
import initFirebase from "../../components/api/initialize";

import Featured from "../cases/Featured";

const Wrapper = styled.div`

${flex}
padding:3rem;
`
const CaseList = styled.article`
max-width:1000px;
margin: 0 auto;
display: grid;
gap: 2rem;
@media ${device.desktop}{
  grid-template-columns: repeat(2, 1fr); 
}
`
const ShowCases = () => {
  const [newcases, setCases] = useState([])
  const [dataFb, setData] = useState([])

  const getData = () => {
    const dbRef = ref(getDatabase());
  get(child(dbRef, `/cases/cases/`)).then((snapshot) => {
    if (snapshot.exists()) {
      const val = snapshot.val();
      setData(val)
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


// const dev = dataFb.filter(obj => obj.include("react").map(obj => ({"name": obj.title, "test:": obj.id})))
// console.log(dev)
  useEffect(() => {
    const featured = cases.filter(item => (item.featured === true))
    setCases(featured)
  }, [])

 


  return (
  <Wrapper>
  <CaseList>
    <>{!dataFb && <>...Laddar!</>}
    {dataFb && 
    <Featured
    array = {dataFb}/>}
    </>
  </CaseList>
  </Wrapper>
  );
}
 
export default ShowCases;


//https://stackoverflow.com/questions/65362902/loading-image-location-from-json-file-dynamically-cannot-find-module-reac