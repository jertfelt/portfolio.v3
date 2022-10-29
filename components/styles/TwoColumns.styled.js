import styled, {css} from "styled-components";

const flexInst = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`


export const TwoColumns= styled.div`
display: grid;
grid-columns: 1 fr;
grid-row-gap: 20px;
grid-column-gap: 20px;
grid-rows: 1fr 1fr;

${props => 
  props.xlarge && 
  css`
  max-width: ${({theme}) => theme.containers.xl};
  `}

  

`