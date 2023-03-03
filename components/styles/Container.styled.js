import styled, {css} from "styled-components";
import { flex, device, borders} from "../styles/Styles"
export const Container = styled.section`

${props => 
  props.xlarge && 
  css`
  max-width: ${({theme}) => theme.containers.xlarge};
  min-width:${({theme}) => theme.containers.xlarge};
  
  `}

  ${props => 
  props.xlargegreyslantedafter && css`
  background-color:${({theme}) => theme.colors.grey};
  max-width: ${({theme}) => theme.containers.xlarge};
  min-width:${({theme}) => theme.containers.xlarge};
  min-height:80vh;
margin-top:2rem;
padding:2rem;
padding-bottom: ${({theme}) => theme.paddingSizes.medium};
width:100%;

position: relative;
z-index:1;

  
&::after {
  background: inherit;
  content: '';
  display: block;
  height: 20%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
  -webkit-transform: skewY(0deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
  @media only screen and (${device.laptopL}){
    -webkit-transform: skewY(0deg);
    transform: skewY(-2deg);
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
    }
}
  
  `}

  ${props => 
    props.purple && 
    css`
    // // max-width: ${({theme}) => theme.containers.xlarge};
  
    background-color: ${({theme}) => theme.colors.purple};
    `}
  

`