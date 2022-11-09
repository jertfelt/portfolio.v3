import { useRouter } from "next/router";

import styled from "styled-components";
import {Container} from "../../components/styles/Container.styled.js"
import {flex, device} from "../../components/styles/Styles"
import {Grid} from "../../components/styles/Grid.styled"

//next and react
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect } from "react";


const Detail = styled.section`
min-height:100vh;
font-family: Roboto;
h1{
  font-family:Arya;
  font-size:${({theme}) => theme.fontSizes.large};
}

`


const IndividualPage = ({array, id}) => {

  console.log(id)

  let individual = array.filter(item => {
    return item.id.toString() === id
  })


  return (
  <Detail>
    {individual.map(item => (
      <article key={item.id}>
         <h1>{item.title}</h1>
         <h2>{item.sub}</h2>
         <div>
          <h2>Info:</h2>
          <p>{item.text}</p>
          <span>
          <p>#{item.tags.c1}</p>
          <p>#{item.tags.c2}</p>
          <p>#{item.tags.c3}</p>
          </span>
         </div>
         <Image 
         alt= {item.sources.imgalt}
         src={item.sources.imgurl}
         width={500}
         height={500}></Image>
           <Image 
         alt= {item.extra.file01.alt}
         src={item.extra.file01.url}
         width={500}
         height={500}></Image>
      </article>
    ))}
  
  </Detail> );
}
 
export default IndividualPage;