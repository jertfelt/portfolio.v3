import styled, {css} from "styled-components";

const flexInst = ({direction, align, justify}) => `
display: flex;
flex-direction: ${direction || "column"};
align-items: ${align || "center"};
justify-content: ${justify || "center"}; 
`

export const TwoColumns= styled.div`
margin:${({theme}) => theme.paddingSizes.medium};
margin-top:0;
${flexInst({direction:"row", justify: "space-between"})};
font-family: Roboto;
font-size:${({theme}) => theme.fontSizes.medium};
line-height:1.8rem;
@media only screen and (max-width: 700px){
  ${flexInst({direction:"column"})}
};


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
    width:50%;
    padding-left:10px;
    padding-right: 10px;
    position: relative;
    left: auto;
    right: auto;
    flex-wrap: wrap;
    `}

`