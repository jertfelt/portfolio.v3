import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Image from 'next/image'


const Section = styled.section`
padding:4em;
min-height:100vh;
font-family: Roboto;
h1{
  background:${({theme}) => theme.colors.vividblue};
  border-radius:${({theme}) => theme.borderradius.fourth};
  max-width:150px;
  padding:1rem;
  font-size:2em;
  animation-name: spin;
  animation-duration: 5s;
  animation-iteration-count: 10;
  position:relative;
  font-family:Arya;
  color:${({theme}) => theme.colors.white};
  text-transform: uppercase;
}
@keyframes spin {
  0%   {background: ${({theme}) => theme.colors.vividblue}; left:0px; top:0px; }
  25%  {background: ${({theme}) => theme.colors.brown}; left:50%; top:120px; }
  50%  {background: ${({theme}) => theme.colors.yellow}; left:50%; top:300px;}
  75%  {background: ${({theme}) => theme.colors.lightblue}; left:10%; top:100px; }
  100% {background: ${({theme}) => theme.colors.vividblue}; left:0px; top:0px; }
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
   
      router.push('/')
    }, 5000)
  }, [])

  return (
    <Section>
      <h1>Ooops...</h1>
      <h2>Sidan finns inte!</h2>
      <p>Du kommer tillbaka till <Link href="/">startsidan</Link> om 5 sekunder...</p>
      </Section>
  );
}

export default NotFound;