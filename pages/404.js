import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Image from 'next/image'
import randomimage from "../public/img/tova-poetry-slam.png"

const Section = styled.section`
padding:4em;
font-family: Roboto;
h1{
  font-size:3em;
  font-family:Arya;
  color:${({theme}) => theme.colors.lightblue};
  text-transform: uppercase;
}
a{
text-decoration: none;
color:${({theme}) => theme.colors.lightblue};
}
`
const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <Section>
      <h1>Ooops...</h1>
      <h2>Sidan finns inte!</h2>
      <p>Du kommer tillbaka till <Link href="/">startsidan</Link> om 3 sekunder...</p>
      <Image
      src={randomimage}
      width={600}/>
      </Section>
  );
}
 
export default NotFound;