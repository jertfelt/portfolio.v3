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
export const BlackButton = styled.button`
background:transparent;
border:none;
color: ${({theme}) => theme.colors.white};
padding:1rem;
border-radius:29px;
border:solid 2px;
font-size:18px;
&:hover, &:active {
  border-color:transparent;
  border-radius: ${({theme}) => theme.borderradius.second};
  background-color:${({theme}) => theme.colors.white};
  color:${({theme}) => theme.colors.vividblue};
}
`

export const ContactButton = styled.button`
background:transparent;
border-color:${({theme}) => theme.colors.white};
color: ${({theme}) => theme.colors.white};
padding:1rem;
border-radius:29px;
border:solid 2px;
font-size:18px;

&:hover, &:active {
  border-color:none;
  border-radius: ${({theme}) => theme.borderradius.third};
}
a{
  text-decoration:none;
  color: ${({theme}) => theme.colors.white};
}
a:visited{
  color: ${({theme}) => theme.colors.white};
}
a:focus{
  color:${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.borderradius.first};
}

`