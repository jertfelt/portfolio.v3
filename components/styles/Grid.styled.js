import styled, {css} from "styled-components";
import { device } from "./Styles";

export const Grid = styled.div`
display: grid;
max-width: 1000px;
margin: 0 auto;
gap: 2rem;
@media (min-width: 600px) {
  grid-template-columns: repeat(3, 1fr);
 }
 @media screen and ${device.maxtablet}{
  grid-template-columns: repeat(2, 1fr);
  padding:2rem;
  gap:4rem;
  max-width:900px;

 }
 @media screen and ${device.maxmobile}{
  grid-template-columns: repeat(1, 1fr);
  max-width:400px;
 }

 ${props => 
  props.cverfarenhet && 
  css`  
  @media (min-width: 600px) {
  grid-template-columns: repeat(3, 1fr);
 }
  
  `}

${props => props.about && css`

font-family:Roboto;
line-height:150%;
padding:1rem;
padding-top:8rem;
font-size:${({theme}) => theme.fontSizes.medium};
@media (min-width: 1000px){
  gap: 5rem;
}
@media (max-width: 1000px){
  gap:3rem;
}
@media screen and ${device.laptop}{

}

`}


${props => 
  props.numbers && 
  css`  
  gap:5em;
  @media screen and ${device.maxtablet}{
    gap:2rem;
    display:flex;
    flex-direction:column;
  }
  `}

  ${props => 
    props.cv && 
    css`  

gap: 5rem;
@media (min-width: 700px) {
  grid-template-columns: repeat(2, 1fr);
 }


    `}
    ${props => 
      props.cases && 
      css`  

      
  
      `}
  

`