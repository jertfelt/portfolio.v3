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
import { courses } from "../data/courses";
import CountingUp from "../components/homepage/counter";
const workDb = work;
const educationDB = education;


const Content = styled.section`
h1{
  border-radius: ${({theme}) => theme.borderradius.first};
  background-color:${({theme}) => theme.colors.vividblue};
  padding:2rem;
  color:${({theme}) => theme.colors.lightblue}
}
padding-top:2em;
${flex}
font-family:Roboto;
padding-bottom:10em;
`
const IntroParagraph = styled.p`
line-height:150%;
width:50%;
`
const Heading = styled.span`
${flex({align:"center", justify:"space-around"})}
a{color:${({theme}) => theme.colors.lightblue};
font-weight:bold;
&:hover{
border-radius: ${({theme}) => theme.borderradius.fourth};
background-color:${({theme}) => theme.colors.vividblue}; }
text-decoration:none;}
`
const Title = styled.h1`
font-family: Arya;
font-size:72px;
line-height:1rem;
margin-bottom:2rem;`

const CVContent=styled.div`
h2{
  font-family: Arya;
  font-size: ${({theme}) => theme.fontSizes.mediumlarge};
  text-decoration:underline;
  text-transform:uppercase;
  text-align:left;
}
`

const Row = styled.div`
${flex}
@media only screen and (${device.laptop}){
  ${flex({direction:"row", align:"center", justify:"center"})}
  padding:5em;
 
}`

const GridItem = styled.article`
  max-width:70%;
h3{
  font-family:"Arya";
  font-size:${({theme}) => theme.fontSizes.large};
  color: ${({theme}) => theme.colors.lightblue};
  line-height:1.5rem;

}
h4{
  margin-top:-1rem;
  font-size:${({theme}) => theme.fontSizes.medium};
}
@media  screen and (max-width:600px){

  padding-left:1rem;
}
img{
  border-radius: 50%;
  margin-top:1rem;
}

${props => 
  props.work && 
  css`
  &:hover{
    border-radius:${({theme}) => theme.borderradius.third};
    background-color:${({theme}) => theme.colors.vividblue};
  }
  `}
  ${props => 
    props.workBlob && 
    css` 
    border-radius:${({theme}) => theme.borderradius.fourth};
    &:hover{
      border-radius:${({theme}) => theme.borderradius.third};
    }
    background-color:${({theme}) => theme.colors.vividblue};
    @media only screen and (${device.laptop}){
    max-height:220px;
      width:70%;
      margin-left:-4rem;
      padding-left:4rem;
      }
    `}

`
const Period = styled.p`
font-size:${({theme}) => theme.fontSizes.mediumsmall};
margin-bottom:-1rem;
font-weight:bold;
`

const Bread= styled.p`
width:80%;
line-height:1.8rem;
font-size:${({theme}) => theme.fontSizes.mediumsmall};
margin-top:-1rem;
padding:0;
`
const Work = styled.section`
width:100%;
padding-bottom:2rem;`

const Arbete = styled.section`
background-color: ${({theme}) => theme.colors.yellow};
width:80%;
position: relative;
z-index:1;
padding-bottom:3rem;
padding-top:rem;
padding:2rem;
margin-top:4rem;
margin-bottom:5em;

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
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
    -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
}
`

const Wisdom =styled.section`
background-color: ${({theme}) => theme.colors.vividblue};
width:80%;
position: relative;
z-index:1;
padding-bottom:3rem;
padding-top:3rem;
padding:2rem;
margin-bottom:5em;

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
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
  background: ${({theme}) => theme.colors.vividblue};
  content: '';
  display: block;
  height: 50%;
  left: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
  
  -webkit-transform: skewY(8deg);
  transform: skewY(8deg);
  -webkit-transform-origin: 100%;
  transform-origin: -10%;
}
`

const Education =styled.section`
background-color: ${({theme}) => theme.colors.brown};
width:80%;
position: relative;
z-index:1;
padding-bottom:3rem;
padding-top:3rem;
padding:2rem;
margin-bottom:5em;

&::before {
  top: 0;
  -webkit-transform: skewY(-4deg);
  transform: skewY(-4deg);
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

const Erfarenhet = styled.div`
h4{
  margin-top:1rem;
  margin-bottom:-1rem;
  &:hover{
    transition: transform 250ms;
    transform: translateY(-4px);
    background-color:${({theme}) => theme.colors.yellow};
    border-radius:${({theme}) => theme.borderradius.fourth};
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
padding:18px;
font-size:${({theme}) => theme.fontSizes.mediumsmall};
border-color:${({theme}) => theme.colors.white};
background:transparent;
border-radius:${({theme}) => theme.borderradius.second};
color:${({theme}) => theme.colors.lightblue};
border:solid;
cursor: pointer;
max-width:50%;
&:hover{
  border-color:${({theme}) => theme.colors.white};
  color:${({theme}) => theme.colors.white};
}
&:active{
  background-color:${({theme}) => theme.colors.lightblue};
  border:none;
}
&:focus{
  background-color:transparent;
  color:${({theme}) => theme.colors.white};
}
`
const LikeButt = styled.button`
padding:10px;
border-radius:${({theme}) => theme.borderradius.fourth};
background-color:${({theme}) => theme.colors.purple};
border:none;
border-radius:19px;
color:${({theme}) => theme.colors.white};
&:focus{
  background-color:${({theme}) => theme.colors.brown};
}
&:active{
  background-color:${({theme}) => theme.colors.brown};
}
&:hover{
  cursor: pointer;
}
`

const BlobInGrid = styled.div`
margin-top:-2rem;
padding:0;
display:flex;
align-items:center;
gap:1rem;
span{


  margin:0;
  padding:0;
  margin-bottom:1rem;
  
}
`

const CVpage = () => {

  const [notShow, setNotShow] = useState(true);
  const [showFb, setShowFb] = useState(false)
  const [doneCourses, setCourses] = useState([]);
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
  setCourses(courses.filter(item => (item.done === true)))
  }, [])

const done = (doneCourses.length/courses.length *100);

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
const [buttonMsg, setButtonMsg] = useState("Läs mer om frontend på Nackademin")


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
        <IntroParagraph>Här följer relevant urval av jobb, utbildningar och erfarenheter som har med frontend att göra. Se gärna hela mitt cv på <Link href="https://www.linkedin.com/in/tovajertfelt/">Linkedin.</Link></IntroParagraph>
        </Heading>

      <Arbete>
    <CVContent>
    <h2>Arbete</h2>
    <Grid cv>
      
      {showFb ? workData.map((item,index) =>(
      <GridItem 
      work
      key={index}>
        <Period>{item.period}</Period>
      <h3>{item.workplace}</h3>
      <h4>{item.title}</h4>
      <Bread>{item.text}</Bread>
      </GridItem>
      )) : dbWork.map(item => item).map((item,index) =>(
        <GridItem 
        work
        key={index}>
          <Period>{item.period}</Period>
        <h3>{item.workplace}</h3>
        <h4>{item.title}</h4>
        <Bread>{item.text}</Bread>
        </GridItem>
        ))
      
      }
      <GridItem workBlob>
        <h3>Praktik!
        </h3>
        <Bread>Just nu går jag praktik som frontendare hos Vinnovera, Stockholm.
        Våren 2023: praktiserande junior konsult hos Society Icon.
        </Bread>
      </GridItem>
      </Grid>
      
      </CVContent>
      </Arbete>
      <Education>
      <CVContent>
      <h2>Utbildning</h2> 
      <Grid cv>
        
        {showFb ? education.map((item,index) =>(
        <GridItem 
        key={index}>
        <Period>{item.period}</Period>
        <h3>{item.school}</h3>
        <h4>{item.title}</h4>

        <Bread>{item.text}</Bread>
        {item.school === "Nackademin" &&  
        <BlobInGrid>
          <h3>Process:</h3>
              <CountingUp
          number={done}
          percent ={true}
          />
         
          </BlobInGrid>}
        </GridItem>
        )) : dbEd.map(item => item).map((item,index) =>(
          <GridItem 
          key={index}>
            <Period>{item.period}</Period>
          <h3>{item.school}</h3>
          <h4>{item.title}</h4>
         
          <Bread>{item.text}</Bread>
          {item.school === "Nackademin" &&  
        <BlobInGrid>
              <CountingUp
          number={done}
          percent ={true}
          />
          </BlobInGrid>}
          </GridItem>
          ))}
        <Knapp 
          aria-label="button"
          type="button"
          onClick={reveal}>{buttonMsg}
        </Knapp>
        </Grid>
        {show && <Row>
      <Nackademin/>
      
      </Row> }
      </CVContent>
      </Education>
 
      <Wisdom>
      <Erfarenhet>
      
      <CVContent>
        <h2>Erfarenhet</h2>
        <Grid cverfarenhet> 
        <GridItem>
          <h3>Techstack</h3>
          <h4>Frontend</h4>
          <ul>
            <li>GIT</li>
            <li>React</li>
            <li>NEXT.js</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>CSS/SASS</li>
            <li>Styled components</li>
            <li>HTML5</li>
            <li>BEM</li>
            <li>Netlify</li>
            <li>Google firebase</li>
            <li>Strapi</li>
            <li>Wordpress</li>
          </ul>
        </GridItem>
      <GridItem>
        <h3>Yrkeskunskaper</h3>
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
          <h3>Programvaror</h3>
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
      </Grid>
      
      </CVContent>
      <LikeButt onClick={handleClick}>Likes ({likes})</LikeButt>
      </Erfarenhet>
      </Wisdom>
      </Content>
    </Container>
   );
}
 
export default CVpage;
