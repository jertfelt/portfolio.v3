import styled, {css} from "styled-components";

export const Button = styled.button`
border:none;

${props => 
  props.next && 
  css`  
  background-color:${({theme}) => theme.colors.vividblue};
  border-radius: 50%;
  padding:2rem;
  img{
    max-width:40px;
    max-height:40px;
  }
  &:hover{
    background-color: ${({theme}) => theme.colors.black};
  }
  &:focus{
    background-color: ${({theme}) => theme.colors.white};
  }
  
  `}

  

`