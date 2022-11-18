import styled, {css} from "styled-components";
import{flex, device} from "./Styles";

export const TwoColumns= styled.div`
margin:${({theme}) => theme.paddingSizes.medium};
margin-top:0;
font-family: Roboto;
font-size:${({theme}) => theme.fontSizes.medium};
line-height:150%;

@media ${device.tablet}{
  ${flex({direction:"row", justify: "space-between"})};
}

${props => 
  props.numbers && 
  css`
  position: relative;
  float: left;
  width: 100%;
  left: auto;
  right: auto;
  `}
  `
  
export const Column = 
styled.article`
padding-right: 2em;
padding-left:1em;


${props => 
  props.whoamI_1 && 
  css`

  position: relative;
  float: left;
  width: 100%;
  left: auto;
  right: auto;
  `}

  ${props => 
    props.whoamI_2 && 
    css`
    width:80%;
    padding-left:10px;
    padding-right: 10px;
    position: relative;
    left: auto;
    right: auto;
    flex-wrap: wrap;
    @media ${device.tablet}{
      width:50%;
      }
    `}

`