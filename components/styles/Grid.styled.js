import styled, {css} from "styled-components";

export const Grid = styled.div`
display: grid;
max-width: 1200px;
margin: 0 auto;
gap: 1rem;
@media (min-width: 600px) {
  grid-template-columns: repeat(2, 1fr);
 }
@media (min-width: 700px) {
  grid-template-columns: repeat(3, 1fr);
 }

${props => 
  props.numbers && 
  css`  
  margin-top:2em;
  
  // // max-width: ${({theme}) => theme.containers.xl};
  `}

  ${props => 
    props.cv && 
    css`  

gap: 5rem;
@media (min-width: 700px) {
  grid-template-columns: repeat(2, 1fr);
 }


    `}
  


`