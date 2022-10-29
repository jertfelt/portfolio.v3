import styled, {css} from "styled-components";

export const Container = styled.section`
min-height: 100vh;

${props => 
  props.xlarge && 
  css`
  max-width: ${({theme}) => theme.containers.xl};
  `}

  

`