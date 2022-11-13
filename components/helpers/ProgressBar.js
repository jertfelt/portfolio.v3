
import styled, {css} from "styled-components";
import { flex, device } from "../styles/Styles";
import PBar from "./PBar";
import TechNames from "./Technames";

const Bar = styled.div`
${flex({direction:"row"})}
height: 30px;
width: 100%;
overflow:none;
`

const Names=styled.div`
${flex({direction:"row"})}
height:30px;
width: 100%;
`
const ProgressBar = ({items}) => {
  return ( 
  <>
  <h3>Språk:</h3>
      <Bar>
    {items.map((i, idx) => (
      <PBar
      key={idx}
      amount={i.value}
      name={i.id}/>
    ))}
    </Bar>
  
    {/* <Names>
    {items.map((i, idx) => (
      <>
     <TechNames 
     key={idx}
     amount={i.value}
      name={i.id}/>
    </>
    ))}
      </Names> */}
  </>
  );
}
 
export default ProgressBar;

