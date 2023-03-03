import { quotesAboutMe } from "../../data/quotes";
import {useState} from "react"
import styled from "styled-components";
import { flex, device, borders} from "../styles/Styles"

const Section = styled.div`
min-height:80vh;
margin-top:2rem;
padding:2rem;
padding-bottom: ${({theme}) => theme.paddingSizes.medium};
width:100%;
background-color: transparent;
position: relative;
z-index:1;

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 75%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}

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
`

const GridThree = styled.div`
display:grid;
grid-template-columns: .5fr .2fr .7fr;
justify-items:start;
align-items:start;
column-gap:2rem;
padding:5em;

margin:5em;
div{
  text-align:center;
  display:flex;
  flex-wrap:wrap;
   background-color: ${({theme}) => theme.colors.black};
    border-radius: ${({theme}) => theme.borderradius.second};
  &:hover{
    background-color: ${({theme}) => theme.colors.black};
    border-radius: ${({theme}) => theme.borderradius.first};
    filter: drop-shadow(0 2mm 4mm #344ce6);
  }
  padding:1rem;
  padding-bottom:3rem;
  blockquote{
    width:80%;
  }
  p{width:90%;}
  
}

blockquote{
  font-family:Roboto;
  h3{
    font-family: Arya;
    font-size:40px;
    color:${({theme}) => theme.colors.lightblue};
  }
  h4{
    text-align:left;
    margin-top:-2rem;
    font-size:18px;
  }
}

`

const GridWithQuotes = () => {
  return ( <Section>
      <GridThree>
    {quotesAboutMe.map(item => (
  <div
  key={item.id}>
    <blockquote>
  <h3>{item.headline}</h3>
  <h4>“{item.quote}”</h4>
  <p>{item.name}</p>   
  </blockquote>
  </div>
  ) )}
    </GridThree>

  </Section> );
}
 
export default GridWithQuotes;