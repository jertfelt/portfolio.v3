import CountUp from "react-countup";
import styled from "styled-components";

const NumberSpan = styled.span`
max-width:180px;
`
const BigNumber = styled.h3`
font-size:${({theme}) => theme.fontSizes.xlarge};
line-height:1em;
color:${({theme}) => theme.colors.lightblue};
font-family: Arya;
font-weight: 500;
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