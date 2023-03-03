import styled from "styled-components";
import {flex, device} from "../components/styles/Styles"
import Link from "next/link";

const FooterContainer = styled.footer`
display:flex;
flex-direction:row;
width:100%;
position: absolute;
z-index:5;
padding:${({theme}) => theme.paddingSizes.medium};
height:20vh;
bottom:100;
align-items:center;
justify-content:center;
background-color:${({theme}) => theme.colors.grey};
`


const Links = styled.div`

${flex({direction:"row"})}
gap:10px;
font-family: Arya;
font-size:  ${({theme}) => theme.fontSizes.medium};
line-height: 1.4rem;
a{
  border-style: solid;
  border-color: transparent;
  border-radius: ${({theme}) => theme.borderradius.first};
  padding:18px 18px;
  text-decoration:none;
  color: ${({theme}) => theme.colors.white};
  &:hover{
    color:${({theme}) => theme.colors.lightblue};
    background-color:black;
  }
}`

const Footer = () => {
  return (
  <FooterContainer>
 
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