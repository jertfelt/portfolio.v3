import styled, {css} from "styled-components";
import {flex, device} from "../components/styles/Styles"
import {Container} from "../components/styles/Container.styled.js"
import {Line} from "../components/styles/Line.styled"
import { useCallback, useEffect, useState, useReducer } from "react";
import {Grid} from "../components/styles/Grid.styled";
import { getCV } from "../components/api/cases";
import { SquigglyLine } from "../components/styles/Line.styled";
import Nackademin from "../components/homepage/Nackademin";
import {work, education} from "../data/cv";
import Link from "next/link";
import kollektivsorg from "../public/img/kollektiv-sorg-samples.png"
import Image from "next/image";
const workDb = work;
const educationDB = education;


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
p{padding:2rem;}
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
padding:2em;
padding-top:-1rem;
h2{
  font-family: Arya;font-size: ${({theme}) => theme.fontSizes.mediumlarge};
  text-decoration:underline;
  text-transform:uppercase;
  text-align:center;
}
@media only screen and (${device.tablet}){
  padding:5em;
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
const Row = styled.div`

${flex}
@media only screen and (${device.laptop}){
  ${flex({direction:"row", align:"center", justify:"center"})}
  padding:5em;
 
}`

const GridItem = styled.article`

  max-width:80%;
h3{
  font-family:"Arya";
  font-size:${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.lightblue};
  margin-bottom:-1rem;

  padding-left:2rem;
}
h4{

  font-size:${({theme}) => theme.fontSizes.medium};
  padding-left:2rem;
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
    border-radius:${({theme}) => theme.borderradius.second};
    background-color:${({theme}) => theme.colors.black};

    @media only screen and (${device.laptop}){
    height:200px;
  
      width:80%;
     
     
        h3{
          padding-left:5rem;
        }
        p{
          padding-left:5rem;
        }
      }
    `}

`
const Period = styled.p`
font-size:${({theme}) => theme.fontSizes.mediumsmall};
margin-bottom:-4rem;

font-weight:bold;
`
const Bread= styled.p`
width:80%;

line-height:1.8rem;
font-size:${({theme}) => theme.fontSizes.mediumsmall};
margin-top:-2rem;
padding:0;
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

${flex}
h4{
 
  &:hover{
    transition: transform 250ms;
    transform: translateY(4px);
    background-color:black;
  }
  padding:1rem;
  line-height:1.8rem;
  
  padding-left:2rem;
}
ul{

  padding-top:-10px;
  list-style:square;
  padding-left:3rem;
  
}
li{
  
  margin-bottom:4px;
  font-size:${({theme}) => theme.fontSizes.medium};
`
const Knapp = styled.button`
padding:10px;
font-size:${({theme}) => theme.fontSizes.mediumsmall};
background-color:${({theme}) => theme.colors.grey};
border:none;
border-radius:19px;
color:${({theme}) => theme.colors.white};
font-weight: bold;
cursor: pointer;
&:hover{
  background-color:${({theme}) => theme.colors.vividblue};
}
&:active{
  background-color:${({theme}) => theme.colors.black};
}
&:focus{
  background-color:${({theme}) => theme.colors.black};
}
`
const LikeButt = styled.button`
margin-left:5em;
padding:10px;
background-color:${({theme}) => theme.colors.vividblue};
border:none;
border-radius:19px;
color:${({theme}) => theme.colors.white};
&:focus{
  background-color:${({theme}) => theme.colors.black};
}
&:active{
  background-color:${({theme}) => theme.colors.black};
}
&:hover{
  cursor: pointer;
}
`

const CVpage = () => {

  const [notShow, setNotShow] = useState(true);
  const [showFb, setShowFb] = useState(false)
    //*------from cv.js in data, instead of fb:

  // const [state, dispatch] = useReducer(reducer, initialState);
const [dbWork, setDbWork] = useState(workDb);
const [dbEd, setDbEd] = useState(educationDB);

//firebase: 
const [workData, setWData] = useState(null);
const [education, setEData] = useState(null)

const fetchData = useCallback(async () => {
  const newData = await getCV("work");
  setWData(newData)
  const ed = await getCV("education");
  setEData(ed)
})

useEffect(() => {
  fetchData().catch(console.error)
  if(workData){
    
    setShowFb(true);
    setNotShow(false);
  }
  else{
    setNotShow(true);
    setShowFb(false);
  }
}, [])

//both:
const [likes, setLikes] = useState(0);
const [show, setShow] = useState(false);
const [buttonMsg, setButtonMsg] = useState("Läs mer om vad jag gör på Nackademin")


const reveal = () => {
if(show){
  setShow(false)
  setButtonMsg("Läs mer om vad jag gör på Nackademin")
}
else{
  setShow(true)
  setButtonMsg("Stäng")
}
}

function handleClick() {
  setLikes(likes + 1);
  if(likes ===10){
    alert("Nu har du väl ändå klickat tillräckligt många gånger här!")
    setLikes(0)
  }
}

  return ( 
    <Container xlarge>
      <Content>
        <Heading>
        <Title>CV</Title>
        <p>Här följer relevant urval av jobb, utbildningar och erfarenheter som har med frontend att göra. Se gärna hela mitt cv på <Link href="https://www.linkedin.com/in/tovajertfelt/">Linkedin.</Link></p>
        </Heading>
      <Line/>
      {showFb && <>
      <Work>
      <CVContent>
      <h2>Arbete</h2>
      <Grid cv>
        
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
        
        {education && education.map((item,index) =>(
        <GridItem 
        key={index}>
        <Period>{item.period}</Period>
        <h3>{item.school}</h3>
        <h4>{item.title}</h4>
        <Bread>{item.text}</Bread>
        </GridItem>
        ))}
         <Knapp 
         aria-label="button"
         type="button"
         onClick={reveal}>{buttonMsg}</Knapp>
        </Grid>
       
        {show && <Row>
      <Nackademin/>
      
      </Row> }
      </CVContent>
      </Education>
      </>}
      
      {notShow && <>
        <Work>
      <CVContent>
      <h2>Arbete</h2>
      <Grid cv>
        
        {dbWork && dbWork.map(item => item).map((item,index) =>(
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
        {dbEd && dbEd.map(item => item).map((item,index) =>(
        <GridItem 
        key={index}>
        <Period>{item.period}</Period>
        <h3>{item.school}</h3>
        <h4>{item.title}</h4>
        <Bread>{item.text}</Bread>
        </GridItem>
        ))}
         <Knapp 
         aria-label="button"
         type="button"
         onClick={reveal}>{buttonMsg}</Knapp>
        </Grid>
       
        {show && <>
      <Nackademin/>

      </> }
      </CVContent>
      </Education>
      
      </>}
      <Erfarenhet>
      
      <CVContent>
        <h2>Övrigt</h2>
        <Grid cv> 
      <GridItem>
      
        <h3>Yrkeskunskap</h3>
        <h4>Mycket goda kunskaper:</h4>
        <ul>
          <li>Ansvarstagande</li>
          <li>Kreativitet</li>
        <li>Analytisk</li>
        <li>Kommunikation</li>
        </ul>
        <h4>Goda kunskaper:</h4>
        <ul>
        <li>Teamarbete i projekt</li>
        <li>Agilt projektarbete</li>
        <li>Problemlösning</li>
        </ul>
      
       
        </GridItem>
        <GridItem>
        <h3>Programvara</h3>
        <h4>Mycket goda kunskaper:</h4>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
        </ul>
        <h4>Goda kunskaper:</h4>
        <ul>
        <li>Figma</li>
        <li>Visual Studio Code</li>
        <li>After Effects</li>
        <li>Github</li>
        </ul>
      </GridItem>
        {/* <GridItem>
      
     <Bread>Jag lär mig snabbt och har under åren utforskat och kombinerat många olika kunskaper och tools of the trade. Jag har därför en bred bas av erfarenhet och kunskaper: allt från det konstnärliga till det tekniska, det kunskapstörstande och taktila, samt det strategiska, analytiska, affärsmannamässiga och sociala. </Bread>
     
      </GridItem>
          <Image src={kollektivsorg}
          width={400}
          heigh={250}
          alt="Bild på min grafiska profil åt Kollektiv Sorg"/> */}
      </Grid>
      
      </CVContent>
      <LikeButt onClick={handleClick}>Likes ({likes})</LikeButt>
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