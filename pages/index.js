import styled from "styled-components"
import { useEffect } from "react"
import Data from '../components/api/Data'
// import Test from "./dblist"

//components:
import Head from "next/head"
import Nav from "../components/Nav"
import Homepage from "./Homepage"

export default function Home() {


  return (  
  <>
  <Head>
  <title>Tova Jertfelt Frontend</title>
  <meta 
  name="title" 
  content="Tova Jertfelt Frontend"></meta>
  <meta 
  name="description" 
  content="Mitt namn är Tova Jertfelt. Jag älskar programmering!
  Jag älskar att jag nu kan få kombinera mina tre styrkor: problemlösning, kreativitet, osläckta nyfikenhet.
  Sedan hösten 2021 går jag på Nackademins YH-utbildning för frontend-programmering. Studierna är fokuserade på javascript och webben, med kurser som går igenom CMS, javascript, HTML och CSS (samt tex SASS), grafikverktyg och att jobba i projekt. Jag själv gillar agila projekt, det är jag van med sedan tidigare i livet."/>
  <link rel="icon" 
  href="/favicon.ico" />
  </Head>
  <Data/>
  <Nav/>
  <Homepage/>
  {/* <Test/> */}


  </>
  )
}
