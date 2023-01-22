import styled from "styled-components";
import {flex, device} from "../components/styles/Styles"
import Link from "next/link";


const FooterContainer = styled.footer`
margin-top:10em;
padding:1rem;
padding-bottom: ${({theme}) => theme.paddingSizes.medium};
width:100%;
background-color: ${({theme}) => theme.colors.purple};
position:relative;
z-index:1;

${flex}

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}
`

const FooterTitle = styled.h2`
font-size:  ${({theme}) => theme.fontSizes.mediumlarge};
font-family: Arya;
text-transform:uppercase;
color: ${({theme}) => theme.colors.lightblue};`

const Links = styled.div`
margin-top:-2rem;
${flex({direction:"row"})}
gap:10px;
font-family: Roboto;
font-size:  ${({theme}) => theme.fontSizes.medium};
line-height: 1.4rem;
a{
  border-style: outset;
  border-color: transparent;
  border-radius: 19px;
  padding:8px 8px;
  text-decoration:none;
  color: ${({theme}) => theme.colors.lightblue};
  &:hover{
    color:${({theme}) => theme.colors.white};
    border-color: ${({theme}) => theme.colors.white};
  }
}`

const Footer = () => {
  return (
  <FooterContainer>
    <p>Sidan är under uppbyggnad och vissa buggar kan förekomma. <br/>Hör av dig om så är fallet!</p>
    <FooterTitle>Hör av dig!</FooterTitle>
    <Links>
    <Link 
    href="https://www.linkedin.com/in/tovajertfelt/">
      Linkedin</Link>
    <Link  
    href="https://github.com/jertfelt">Github</Link>
    <Link 
    href="https://www.tovajertfelt.com">Portfolio</Link>
    </Links>

  </FooterContainer>);
}
 
export default Footer;