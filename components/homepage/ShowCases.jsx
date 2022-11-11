import { useEffect, useState, useCallback } from "react"
import styled, {css} from "styled-components"


import { flex, device } from "../styles/Styles";


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
const [errorMsg, setErrorMsg] = useState(false);
const [loading, setLoading] = useState(false)

if(!cases){
  setErrorMsg(true)
}
  let featured = []
 useEffect(() => {
   featured.push(cases.filter(item => item.featured === true)) 
 },[cases])
 
 console.log(featured, "featured")


  return (
  <Wrapper>
    {errorMsg && <div>Något har gått fel. Prova att refresha sidan.</div>}
  <CaseList>
    <>
    <Featured
    cases = {featured}/>
    </>
  </CaseList>
  </Wrapper>
  );
}
 
export default ShowCases;
