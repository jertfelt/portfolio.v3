
import { useEffect, useState } from "react"
import styled, {css} from "styled-components"
import Link from "next/link"
import { flex, device } from "../styles/Styles";
import Image from "next/image";
import { BlackButton } from "../styles/Button.styled";




const CaseContainer = styled.article`
border-radius: 29px;
padding:2rem;
font-family:Roboto;
${flex({align:"flex-start", justify:"flex-start"})}
@media ${device.laptop}{
  padding:3rem;
}
a{
  text-decoration: none;
  color:${({theme}) => theme.colors.lightblue};
}
padding-bottom:1rem;
// &:hover{
//   background-color:${({theme}) => theme.colors.black};
//   border-radius: ${({theme}) => theme.borderradius.second};
// }
`

const CaseHeader = styled.h3`
color: ${({theme}) => theme.colors.lightblue};
font-family:Arya;
text-transform: uppercase;
font-size:${({theme}) => theme.fontSizes.large};
flex-wrap: wrap;
margin-top:-1rem;
line-height:120%;
width:70%;

`
const Description = styled.p`
font-size:${({theme}) => theme.fontSizes.medium};
width:80%;
color:${({theme}) => theme.colors.white};
text-align: left;
margin-top:0;
`
const Subtitle = styled.h4`
font-size:${({theme}) => theme.fontSizes.medium};
text-transform:uppercase;
`
const ImageWrapper= styled.div`
width: 50%;
  .image--1 {
    object-fit: contain;
    width: 50%;
    height: 50%;
    transition: transform .7s ease-in-out;
    &:hover{
      border-radius: ${({theme}) => theme.borderradius.second};
      filter: drop-shadow(2mm 2mm 3mm #344ce6);
    }
  }
  }
`
const CaseImage = styled(Image)`
`
const Row = styled.div`
gap:2rem;
${flex({direction: "row", align:"center", justify:"space-between"})};

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
 {/* <ImageWrapper
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
          </ImageWrapper> */}
        <Link href={'/cases/' + item.id} 
        key={item.id}
    >   
        
         
          <Description>{item.text}
          </Description>
          <Link href={'/cases/' + item.id} state={{data: item.id}}><BlackButton>Se mer här</BlackButton>
          </Link>
   
       {/* <ImageWrapper
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
         alt= {item.extra.file03.alt}
         src={item.extra.file03.url}
         />
         </ImageWrapper> */}
        </Link>
        
      </>
     }
     {!item && <div>Något har gått fel.</div>}
      </CaseContainer>
   

  );
}
export default CasefItem;




// 