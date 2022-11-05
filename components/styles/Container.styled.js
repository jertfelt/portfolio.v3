import styled, {css} from "styled-components";

export const Container = styled.section`

${props => 
  props.xlarge && 
  css`
  max-width: ${({theme}) => theme.containers.xl};
  `}

  

`