import CountUp from "react-countup";
import styled from "styled-components";
import { device } from "../styles/Styles";

const NumberSpan = styled.span`
max-width:180px;
@media screen and ${device.maxtablet}{ 
  max-width:300px;
  margin-left:-2rem;
}
`
const BigNumber = styled.h3`
font-size:${({theme}) => theme.fontSizes.xlarge};
line-height:1em;
color:${({theme}) => theme.colors.white};
font-family: Arya;
font-weight: 500;
border-radius: ${({theme}) => theme.borderradius.third};
background-color:${({theme}) => theme.colors.vividblue};
padding:2rem;
@media screen and ${device.maxtablet}{ 
  font-size:${({theme}) => theme.fontSizes.large};
  line-height:2em;
  padding:0rem;
  padding-bottom:1rem;
  background-color:transparent;
  
}
`
const Text = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
margin-top:-3em;
`
const CountingUp = ({number, percent, text}) => {

  return ( 
    <NumberSpan>
    <BigNumber>
     <CountUp 
     start={0} 
     end={number} 
     duration={2} 
     delay={0}/>
     {percent && <>%</>}
     </BigNumber>
     <Text>{text}</Text>
    </NumberSpan>     
   );
}
 
export default CountingUp;