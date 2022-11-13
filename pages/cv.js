import styled, {css} from "styled-components";
import {flex, device} from "../components/styles/Styles"
import {Container} from "../components/styles/Container.styled.js"
import {Line} from "../components/styles/Line.styled"
import { useCallback, useEffect, useState, useReducer } from "react";
import {Grid} from "../components/styles/Grid.styled";
import { getCV } from "../components/api/cases";
import { SquigglyLine } from "../components/styles/Line.styled";
import Nackademin from "../components/homepage/Nackademin";
import { cv } from "../data/cv";
import Link from "next/link";
const cvDb = cv;

// const initialState = {
//   count: 0
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

const Content = styled.section`
padding-top:5em;
${flex}
font-family:Roboto;
`
const Heading = styled.span`
${flex({align:"center", justify:"space-around"})}
a{color:${({theme}) => theme.colors.lightblue};
text-decoration:none;}
`
const Title = styled.h1`
font-family: Arya;
font-size:72px;
line-height:1rem;
margin-bottom:2rem;`

const CVContent=styled.div`
padding:5em;
padding-top:-1rem;
h2{
  font-family: Arya;font-size: ${({theme}) => theme.fontSizes.mediumlarge};
  text-decoration:underline;
  text-transform:uppercase;
  text-align:center;
}
`
const Education =styled.section`
background-color: ${({theme}) => theme.colors.purple};
width:100%;
position: relative;
z-index:1;
padding-bottom:3rem;
padding-top:3rem;
margin-bottom:5em;

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-3deg);
  -webkit-transform-origin: 0% 0;
  transform-origin: 0% 0;
  background: inherit;
  content: "";
  display: block;
  height: 30%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
}

&::after {
  background: inherit;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
    -webkit-transform: skewY(0deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
}

`

const GridItem = styled.article`
max-width:80%;
h3{
  font-family:"Arya";
  font-size:${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.lightblue};
  margin-bottom:-1rem;
}
h4{
  font-size:${({theme}) => theme.fontSizes.medium};
}
 
${props => 
  props.work && 
  css`
  &:hover{
    border-radius:${({theme}) => theme.borderradius.third};
    background-color:${({theme}) => theme.colors.black};
  }
  `}
  ${props => 
    props.workBlob && 
    css`
    height:200px;
    h3{
      padding-left:5rem;
    }
    p{
      padding-left:5rem;
    }
      width:80%;
      border-radius:${({theme}) => theme.borderradius.second};
      background-color:${({theme}) => theme.colors.black};
    
    `}

`
const Period = styled.p`
font-size:${({theme}) => theme.fontSizes.mediumsmall};
margin-bottom:-2rem;
font-weight:bold;
`
const Bread= styled.p`
width:80%;
line-height:1.8rem;
font-size:${({theme}) => theme.fontSizes.mediumsmall};

`
const Work = styled.section`
width:100%;
padding-bottom:3rem;`

const Erfarenhet = styled.section`
width:100%;
margin-top:-5em;
margin-bottom:-10em;
padding-top:7em;
padding-bottom:13em;
`

const CVpage = () => {
const [workData, setWData] = useState(cv);
const [education, setEData] = useState(cv)
const [likes, setLikes] = useState(0);
// const [state, dispatch] = useReducer(reducer, initialState);
const [show, setShow] = useState(false);
const [buttonMsg, setButtonMsg] = useState("Läs mer om Nackademin")

console.log(cv)


const fetchData = useCallback(async () => {
  const newData = await getCV("work");
  setWData(newData)
  const ed = await getCV("education");
  setEData(ed)
})

useEffect(() => {
  fetchData().catch(console.error)
}, [])

const reveal = () => {
if(show){
  setShow(false)
  setButtonMsg("Nackademin stats")
}
else{
  setShow(true)
  setButtonMsg("Stäng")
}
}

function handleClick() {
  setLikes(likes + 1);
}

  return ( 
    <Container xlarge>
      <Content>
        <Heading>
        <Title>CV</Title>
        <p>Här följer relevant urval av jobb, utbildningar och erfarenheter som har med frontend att göra. Se gärna hela mitt cv på <Link href="https://www.linkedin.com/in/tovajertfelt/">Linkedin.</Link></p>
        </Heading>
      <Line/>
      <Work>
      <CVContent>
      <h2>Arbete</h2>
      <Grid cv>
        {!workData && <>Laddar...</>}
        {workData && workData.map((item,index) =>(
        <GridItem 
        work
        key={index}>
          <Period>{item.period}</Period>
        <h3>{item.workplace}</h3>
        <h4>{item.title}</h4>
        <Bread>{item.text}</Bread>
        </GridItem>
        ))}
        <GridItem workBlob>
          <h3>Praktik!
          </h3>
          <Bread>Just nu går jag praktik som frontendare hos Vinnovera, Stockholm.</Bread>
        </GridItem>
        </Grid>
        </CVContent>
      </Work>
      <Education>
      <CVContent>
      <h2>Utbildning</h2> 
      <Grid cv>
        {!education && <>Laddar...</>}
        {education && education.map((item,index) =>(
        <GridItem 
        key={index}>
        <p>{item.period}</p>
        <h3>{item.school}</h3>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
        </GridItem>
        ))}
         <button onClick={reveal}>{buttonMsg}</button>
        </Grid>
       
        {show && <>
      <Nackademin/>
      <button onClick={handleClick}>Like({likes})</button>
      </> }
      </CVContent>
      </Education>
      
      <Erfarenhet>
      <CVContent>
        <h2>Övrigt</h2>
      </CVContent>
      <CVContent>
      </CVContent>
      </Erfarenhet>
      </Content>
    </Container>
   );
}
 
export default CVpage;

  
      {/* <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </> */}