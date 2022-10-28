import Link from "next/link"
import styled, {css} from "styled-components"
import Image from "next/image"
import logo from "../public/img/tova-jertfelt-logo.png"
import burgermenu from "../public/icons/pngkey.com-mobile-menu-icon-png-3321462.png"

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
`

const MainMenu = styled.ul`
list-style: none;

@media only screen and (max-width: 1070px){
  max-width: 30%;
  margin-left: 1rem;
}

@media only screen and (min-width: 991px){
  max-width: 20%;
  margin-left: 0;
}
`
const HamburgerIcon = styled(Image)`
margin-left:3rem;
max-width:2.4em;
max-height:2em;

`


const Line = styled.span`
height: 1px;
background-color: ${({theme}) => theme.colors.white};`



const Nav = () => {

const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => {
  console.log(menuOpen)
  menuOpen ? (setMenuOpen(false)) : (setMenuOpen(true))
  console.log("now it is:", menuOpen)
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
  <HamburgerIcon aria-label="button"
  src={burgermenu}
  loading="lazy"
  alt="Öppna menyn här"
  onClick={toggleMenu}/>
}
  <>
    {menuOpen && 
    <>NÄ MEN HEJ</>
      }
  </>
  </MainMenu>

    </ContainerFlexSplit>
    </Container>

  </NavBar>
  <Line/>
  </Header>
  
)
}

export default Nav