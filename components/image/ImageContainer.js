
import Image from "next/image"
import styled, {css} from "styled-components"
import { useEffect, useState } from "react"
import { flex, device } from "../styles/Styles";

//images:
import bookducks_1 from "../../public/img/bookducks--homepage.png";
import bookducks_2 from "../../public/img/bookducks--homepage.png";
import clownArtists from "../../public/img/clown-herocart.png";
import clownArtistsMeme from "../../public/img/clownartists-meme.png"
import disney from "../../public/img/disney-home.png";
import disney_2 from "../../public/img/disney-bonus.png";
import drawPicture from "../../public/img/draw-a-picture-pen.png";
import drawPicture_2 from "../../public/img/draw-a-picture-updated.png"
import ekobanken_1 from"../../public/img/ekobanken--loggedin.png"
import ekobanken_2 from "../../public/img/ekobanken--konto.png"
import ekoline_1 from "../../public/img/ekoline-2.png"
import ekoline_2 from "../../public/img/ekoline.png"
import ewallet_1 from "../../public/img/ewallet.png"
import ewallet_2 from "../../public/img/ewallet--2.png"
import bowling_1 from "../../public/img/node-bowling-single.png"
import bowling_2 from "../../public/img/node-bowling-update.png"
import palt_1 from "../../public/img/palt-kontakt.png"
import palt_2 from "../../public/img/palt-home.png"
import react_1 from "../../public/img/react-forum.png"
import react_2 from "../../public/img/react-forum--2.png"
import smalin_1 from "../../public/img/smalin--1.png"
import smalin_2 from "../../public/img/smalin--3.png"
import starw1 from "../../public/img/starwars.png"
import starw2 from "../../public/img/starwars--2.png"
import portfolio_1 from "../../public/img/portfolio.jpg"
import portfolio_2 from "../../public/img/portfolio--2.png"

const CaseImages = styled(Image)`
width:100%;
${props => 
  props.first && 
  css`
  &:hover{
    border-radius: ${({theme}) => theme.borderradius.first};
    opacity:90%;
  }
  &:focus{
    border-radius: ${({theme}) => theme.borderradius.first};
    opacity:90%;
  }
  &:active{
    border-radius: ${({theme}) => theme.borderradius.first};
    opacity:100%;
  }
  `}
${props => 
  props.second && 
  css`
  &:hover{
    border-radius: ${({theme}) => theme.borderradius.third};
    opacity:90%;
  }
  &:focus{
      border-radius: ${({theme}) => theme.borderradius.third};
      opacity:90%;
  }
  &:active{
    border-radius: ${({theme}) => theme.borderradius.third};
    opacity:100%;
}
  `}
`
const Images = styled.span`
${flex}
gap:2rem;
max-width:90%;
padding-left:2rem;
@media ${device.laptop}{
  ${flex({direction:"row"})}
}`

const ImageContainer = ({id}) => {
const [imgurl1, set1] = useState("")
const [imgurl2, set2] = useState("")
useEffect(() => {
  switch (id){
    case 1:
      set1(ewallet_1)
      set2(ewallet_2)
    break;
    case 2:
      set1(react_1)
      set2(react_2)
      break;
    case 3:
      set1(smalin_1)
      set2(smalin_2)
      break;
    case 4:
      set1(clownArtists)
      set2(clownArtistsMeme)
      break;
    case 5:
      set1(bowling_1)
      set2(bowling_2)
      break;
    case 6:
      set1(ekoline_1)
      set2(ekoline_2)
      break;
    case 7:
      set1(starw1)
      set2(starw2)
      break;
    case 8:
      set1(portfolio_1)
      set2(portfolio_2)
      break;
    case 9:
      set1(bookducks_1)
      set2(bookducks_2)
      break;
    case 10:
      set1(palt_1)
      set2(palt_2)
      break;
    case 11:
        set1(ekobanken_1)
        set2(ekobanken_2)
        break;
    case 12:
      set1(disney)
        set2(disney_2)
        break;
    default:
      set1(drawPicture)
      set2(drawPicture_2)
      break;
  }
 

},[])


  return ( 
    <Images 
    arial-label="buttons">
    <CaseImages first
    width={300}
    height={300}
    src={`${imgurl1}`}
    alt="Printscreen"/>
    <CaseImages second
    width={300}
    height={300}
    src={`${imgurl2}`}
    alt="Printscreen"/>
    </Images> 
   
   );
}
 
export default ImageContainer;