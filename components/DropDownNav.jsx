import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const DropContainer = styled.ul`
background-color: ${({theme}) => theme.colors.white};
color: ${({theme}) => theme.colors.purple};
display: flex;
flex-direction: column;
position: absolute;
z-index: 99;
padding:30px;
top:74px;
right:0px;
list-style: none;
font-size: ${({theme}) => theme.fontSizes.medium};
font-weight:bold;

a{
  text-decoration:none;
  text-align:left;
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
  display:flex;
  width:30%;
  height:18px;
  cursor:pointer;
  margin-top:-1rem;
  margin-bottom:3rem;
  font-size:18px;
  color:${({theme}) => theme.colors.black}
}
span:hover{ 
    color:${({theme}) => theme.colors.vividblue};
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

const DropDownMenu = ({menuOpen}) => {
  console.log(menuOpen)
  const [isItOpen, setIsItOpen] = useState(menuOpen)
  const toggleMenu = () => {
    isItOpen ? ( setIsItOpen(false)) : ( setIsItOpen(true))
    console.log("now it is:", isItOpen)
  }
  
  return ( 
  <DropContainer>
     <span 
      onClick={toggleMenu}
      loading="lazy"
      aria-label="button"
      alt="Stäng menyn här">
      <p>X</p>
      </span>
      <MenuLinks href="/"
      >Hem</MenuLinks>
      <MenuLinks href="/CV">
        CV
      </MenuLinks>
      <MenuLinks href="/Cases">
        Cases
      </MenuLinks>
  </DropContainer> );
}
 
export default DropDownMenu;