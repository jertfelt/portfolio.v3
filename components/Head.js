import Head from "next/head"
 const HeadComponent = () => {
  return(
  <Head>
  <title>Tova Jertfelt Frontend</title>
  <meta 
  name="title" 
  content="Tova Jertfelt Frontend"></meta>
  <meta 
  name="description" 
  content="Mitt namn är Tova Jertfelt. Jag älskar programmering!
  Jag älskar att jag nu kan få kombinera mina tre styrkor: problemlösning, kreativitet, osläckta nyfikenhet.
  Sedan hösten 2021 går jag på Nackademins YH-utbildning för frontend-programmering. "/>
  <meta name="description" 
  content="Tova Jertfelt"
  key="desc" />

    <meta property="twitter:title" 
  content=" Frontendare sedan 2021" />
 <meta
 property="twitter:description"
 content="Jag älskar programmering!
 Jag älskar att jag nu kan få kombinera mina tre styrkor: problemlösning, kreativitet, osläckta nyfikenhet."
/>
<meta property='og:url' 
content='www.tovajertfelt.se/cases'/>
<meta
property="twitter:image"
content="./img/linkedin.png"
        />
  <meta property="og:title" 
  content=" Frontendare sedan 2021" />
 <meta
 property="og:description"
 content="Jag älskar programmering!
 Jag älskar att jag nu kan få kombinera mina tre styrkor: problemlösning, kreativitet, osläckta nyfikenhet."
/>
<meta
property="og:image"
content="./img/linkedin.png"
        />
  <link rel="icon" 
  href="../static/favicon.ico"/>
  </Head>
  )
}

export default HeadComponent