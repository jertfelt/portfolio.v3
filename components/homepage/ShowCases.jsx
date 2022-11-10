import { useEffect, useState, useCallback } from "react"
import { cases } from "../../data/cases"
import styled, {css} from "styled-components"
import Link from "next/link"

import { flex, device } from "../styles/Styles";

import { getData} from "../../components/api/cases";

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


const ShowCases = ({cases}) => {

  console.log(cases, "this is cases")
  

  return (
  <Wrapper>
    {!cases && <div>Något har gått fel. Prova att refresha sidan.</div>}
  <CaseList>
    <>
    {cases && 
    <Featured
    array = {cases}/>}
    </>
  </CaseList>
  </Wrapper>
  );
}
 
export default ShowCases;


//https://stackoverflow.com/questions/65362902/loading-image-location-from-json-file-dynamically-cannot-find-module-reac