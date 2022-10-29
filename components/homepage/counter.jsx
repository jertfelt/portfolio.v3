import CountUp from "react-countup";
import styled from "styled-components";

const NumberSpan = styled.span`
display:flex;
flex-direction: column;
max-width:30%;
`
const BigNumber = styled.h3`
font-size:${({theme}) => theme.fontSizes.xlarge};
line-height:1em;
color:${({theme}) => theme.colors.lightblue};
`
const Text = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
margin-top:-3em;
`
const CountingUp = ({number, text}) => {

  return ( 
    <NumberSpan>
    <BigNumber>
     <CountUp 
     start={0} 
     end={number} 
     duration={2} 
     delay={0}/>
     </BigNumber>
     <Text>{text}</Text>
    </NumberSpan>     
   );
}
 
export default CountingUp;