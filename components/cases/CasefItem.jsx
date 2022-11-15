
import { useEffect, useState } from "react"
import styled, {css} from "styled-components"
import Link from "next/link"
import { flex, device } from "../styles/Styles";
import Image from "next/image";




const CaseContainer = styled.article`
border-radius: 29px;
padding:1rem;
background-color:${({theme}) => theme.colors.purple};
font-family:Roboto;
${flex({align:"center", justify:"center"})}
@media ${device.laptop}{
  padding:2rem;
}
a{
  text-decoration: none;
  color:${({theme}) => theme.colors.lightblue};
}
padding-bottom:3rem;

`

const CaseHeader = styled.h3`
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
text-transform: uppercase;
font-size:${({theme}) => theme.fontSizes.large};
flex-wrap: wrap;
margin-top:-1rem;
line-height:1.8rem;
text-align:center;
`
const Description = styled.p`
font-size:${({theme}) => theme.fontSizes.mediumsmall};
width:100%;
text-align: left;
`
const Subtitle = styled.h4`
font-size:${({theme}) => theme.fontSizes.medium};
text-transform:uppercase;
`
const ImageWrapper= styled.div`
width: 100%;
  .image--1 {
    object-fit: contain;
    width: 100%;
    height: 100%;
    transition: transform .7s ease-in-out;
    &:hover{
      border-radius: ${({theme}) => theme.borderradius.second};
      transform: rotate(-6deg);
      filter: drop-shadow(2mm 2mm 3mm #344ce6);
    }
  }
  }
`
const CaseImage = styled(Image)`
`


const CasefItem = ({item}) => {
  const [imageSize, setSmageSize] = useState({
    width: 300,
    height: 300
  });

  return (
    
    <CaseContainer key={item.id}
    >
     {item && <>
      <Subtitle>{item.sub}</Subtitle> 
        <CaseHeader>    
          <Link href={'/cases/' + item.id} 
                state={{data: item.id}}
                key={item.id}>
                {item.title}
          </Link>
      </CaseHeader> 

    <Link href={'/cases/' + item.id} 
    key={item.id}
    >
       <Description>{item.text}</Description>
      
  <ImageWrapper
         second>
         <CaseImage 
         layout="fill"
         className="image--1"
         onLoadingComplete={target => {
          setSmageSize({
            width: target.naturalWidth,
            height: target.naturalHeight
          });
         }}
        width={imageSize.width}
        height={imageSize.height}
         alt= {item.sources.imgalt}
         src={item.sources.imgurl}
         />
         </ImageWrapper>
    
        </Link>
        
      </>
     }
     {!item && <div>Något har gått fel.</div>}
      </CaseContainer>
   

  );
}
export default CasefItem;




// 