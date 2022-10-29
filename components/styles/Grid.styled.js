import styled, {css} from "styled-components";

export const Grid = styled.div`
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