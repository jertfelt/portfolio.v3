import styled from "styled-components";
import {useState }from "react"
import { ContactButton } from "../components/styles/Button.styled";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/9af866b0-bb7d-11ed-b2bc-b7382f951896";

const Section = styled.section`
padding-top:5em;
padding:5em;
min-height:50vh;
display:flex;
flex-direction:column;
align-items:center;
font-family:Roboto;
h1{
  background:${({theme}) => theme.colors.vividblue};
  border-radius:${({theme}) => theme.borderradius.fourth};
  max-width:150px;
  padding:1rem;
  font-size:2em;
  position:relative;
  font-family:Arya;
  color:${({theme}) => theme.colors.white};
  text-transform: uppercase;
}
a{
  text-decoration:none;
  font-weight:bold;
  color: ${({theme}) => theme.colors.vividblue};
}
`
const Form = styled.form`
display:flex;
flex-direction:column;
gap:1rem;
font-family:Roboto;

div{
  display:flex;
  gap:1rem;
  align-items:center;
  justify-content:space-between;
}
input{
  background:${({theme}) => theme.colors.white};
  border:solid 1px; 
  color:${({theme}) => theme.colors.purple};
}
textarea{
  border-radius:9px;
  font-family:Roboto;
  background:${({theme}) => theme.colors.white};
  padding:4px;
}
`



const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h1>Tack!</h1>
        <h2>Jag kontaktar dig snart.</h2>
      </>
    );

  }
  return ( 
  <Section>
    <h1>Kontakt:</h1>
    <h2>Mina uppgifter:</h2>
    <p>Email: <a href="mailto:tovajertfelt@gmail.com">tovajertfelt@gmail.com</a></p>
    <p>Telefon: 073 68 43 43 8</p>
    <h3>Eller fyll i det här formuläret:</h3>
    <Form
    action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST"
    target="_blank"
    >
<div>
<label htmlFor="Namn">Ditt namn: </label>
  <input
    id="Namn"
    type="text"
    placeholder=""
    name="name"
    required
  />
</div>
<div>
<label htmlFor="Email">Email: </label>
  <input
  id="Email"
    type="email"
    placeholder=""
    name="email"
    required
  />
</div>

  <textarea
    placeholder="Your message"
    name="message"
    required
  />

<ContactButton type="submit">SKICKA</ContactButton>

</Form>
  </Section>
     );
}
 
export default ContactPage;