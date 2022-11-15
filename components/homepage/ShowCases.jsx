import { useEffect, useState, useCallback } from "react"
import styled, {css} from "styled-components"
import CasefItem from "../cases/CasefItem";

import { flex, device } from "../styles/Styles";


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
  return (
  <Wrapper>
    {errorMsg && <div>Något har gått fel. Prova att refresha sidan.</div>}
  <CaseList>
  {cases.map((c) => 
          (
          <CasefItem
          key={c.id}
          item= {c}
          index={c.id}
          />
          ) 
        )}
   {!cases && <p>..Laddar</p>} 
  </CaseList>
  </Wrapper>
  );
}
 
export default ShowCases;
