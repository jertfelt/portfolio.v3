import styled, {css} from "styled-components";
import { device } from "./Styles";
export const Button = styled.button`
border:none;

${props => 
  props.next && 
  css`  
  background-color:${({theme}) => theme.colors.vividblue};
  border-radius: 50%;
  padding:1rem;
  @media only screen and (${device.tablet}){
    padding:2rem;
  }
  img{

    max-width:20px;
    max-height:20px;
    @media only screen and (${device.tablet}){
      max-width:40px;
      max-height:40px;
    }
    
  }
  &:hover{
    background-color: ${({theme}) => theme.colors.black};
  }
  &:focus{
    background-color: ${({theme}) => theme.colors.white};
  }
  
  `}

  

`