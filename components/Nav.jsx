import Link from "next/link"
import styled, {css} from "styled-components"
import Image from "next/image"
import logo from "../public/img/tova-jertfelt-logo.png"
import burgermenu from "../public/icons/pngkey.com-mobile-menu-icon-png-3321462.png"
import close from "../public/icons/closing.png"
import { Line } from "./styles/Line.styled"
import { useState } from "react"

const Header = styled.header`
position: fixed;
top: 0;
width: 100%;
z-index:100;
background-color: ${({theme}) => theme.colors.grey};
`
const NavBar = styled.nav`
background-color: transparent;
opacity: 1;
text-align: right;
display:block;
margin: 0;
padding: 0;
border: 0;
font-family: Roboto`

const Container = styled.div`
max-width: 90%;
`
const ContainerFlexSplit = styled.div`
display:flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
${props =>
  props.xspadding &&
  css`
    margin: 1em;
  `};
`

const StyledLink = styled(Link)`
width: 3em;
display: inline-block;
a{
  text-decoration: none;
}
`
const StyledImage = styled(Image)`
margin-left:3rem;
border-radius:50%;
max-width:100%;
height:3em;
cursor: pointer;
`

const MainMenu = styled.ul`
list-style: none;
`
const HamburgerIcon = styled(Image)`
margin-left:3rem;
max-width:2.8em;
max-height:2em;
cursor:pointer;
width:1.8em;
&:focus{
  margin-left:3.2rem;
}
&:hover{
  margin-left:2.8rem;
  width:2.8em;
}
`

const DropDownMenu = styled.ul`
background-color: ${({theme}) => theme.colors.white};
color: ${({theme}) => theme.colors.purple};
display: flex;
flex-direction: column;
position: absolute;
z-index: 99;
width:50%;
padding:30px;
top:74px;
right:0px;
list-style: none;
font-size: ${({theme}) => theme.fontSizes.medium};
font-weight:bold;

a{
  text-align: right;
  margin-bottom:1rem;
  text-decoration:none;

  &:hover{
    color:${({theme}) => theme.colors.vividblue};
  }
  &:focus{
    color:${({theme}) => theme.colors.vividblue};
  }
  &:active{
    color:${({theme}) => theme.colors.black};
  }
}
span{
  border-radius: 50%;
  align-items: center;
  display:flex;
  width:30px;
  height:30px;
  cursor:pointer;
  margin-top:-1rem;
  margin-bottom:3rem;
  font-size:18px;
  padding:6px;
  p{
    padding:2px;
  }
  color:${({theme}) => theme.colors.vividblue}
}
span:hover{ 
  color:${({theme}) => theme.colors.white};
  background-color:${({theme}) => theme.colors.vividblue};

}
span:focus{
  color:${({theme}) => theme.colors.vividblue};
}
span:focus{
  font-size:20px;
}
`
const MenuLinks = styled(Link)`
font-size: 2rem;
`
const Nav = () => {

const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => {
  menuOpen ? (setMenuOpen(false)) : (setMenuOpen(true))
}

return (
  <Header>
  <NavBar>
    <Container>
    <ContainerFlexSplit xspadding>
  <StyledLink
  href="/"
  aria-current="page">
    <StyledImage 
    src={logo}
    alt="Tova Jertfelt logo"
    loading="lazy"
    aria-current="page"
    /> 
  </StyledLink>

  <MainMenu >
    {!menuOpen && 
    <HamburgerIcon 
      tab-index="0"
      aria-label="button"
      role="button"
      src={burgermenu}
      loading="lazy"
      alt="??ppna menyn h??r"
      onClick={toggleMenu}/>
  }
  </MainMenu>
  {menuOpen && 
    <DropDownMenu>
     <span 
      onClick={toggleMenu}
      loading="lazy"
      role="button"      aria-label="button"
      alt="St??ng menyn ">
      <p>X</p>
      </span>
      <MenuLinks onClick={toggleMenu}
      href="/"
      >Hem</MenuLinks>
      <MenuLinks onClick={toggleMenu}
      href="/cv">
        CV
      </MenuLinks>
      <MenuLinks onClick={toggleMenu}
      href="/cases">
        Cases
      </MenuLinks>
    </DropDownMenu>
      }
    </ContainerFlexSplit>
    </Container>

  </NavBar>
  <Line/>
  </Header>
  
)
}

export default Nav