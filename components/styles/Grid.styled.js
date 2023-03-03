import styled, {css} from "styled-components";

export const Grid = styled.div`
display: grid;
max-width: 1200px;
margin: 0 auto;
gap: 2rem;
@media (min-width: 600px) {
  grid-template-columns: repeat(3, 1fr);
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
  gap:1rem;
}
`}


${props => 
  props.numbers && 
  css`  
  gap:5em;
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
  
filter: drop-shadow(1mm 1mm 1mm #344ce6);
      
  
      `}
  

`