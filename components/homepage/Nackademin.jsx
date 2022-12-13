import Canvas from "./Canvas";
import {flex, device} from "../styles/Styles";
import styled from "styled-components"
import CountingUp from "./counter";
import Link from "next/link";
import { courses } from "../../data/courses";
import { useEffect, useState } from "react";


const Container = styled.section`
padding:3rem;
gap:30px;
div{
  ${flex}; 
}

h3{
  line-height:1.5em;
  text-align: center;
  font-family: Arya;
  color:${({theme}) => theme.colors.lightblue};
  font-size:${({theme}) => theme.fontSizes.large};
}

font-family: Roboto;

h4{
  margin-top:-1rem;
}

p{
  text-align:center;
  margin-top:-1rem;
  line-height:1.5rem;
  a{
    text-decoration: none;
    color:${({theme}) => theme.colors.lightblue};
  }
}
`
const Wrapper = styled.div`
max-width:300px;
@media ${device.laptop}{
  max-width:900px;
}
`
const Row = styled.div`

`

const CounterWrapper = styled.span`
margin-bottom:-2rem;
margin-top:-1rem;
`


const WordCloud = styled.ul`
max-width:50%;
list-style: none;
padding-left: 0;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
line-height: 2.5rem;
li {
  color: ${({theme}) => theme.colors.white};
  display: block;
  font-size: 1rem;
  padding: 0.125rem 0.25rem;
  text-decoration: none;
  position: relative;
}
.uneven{
  color: ${({theme}) => theme.colors.lightblue};
}
.even{
  font-size: 1.2rem;
  font-weight: bold;
}
.VG{
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.white};
}
.notDone{
  color: ${({theme}) => theme.colors.grey};
 
}
`
const HoverElement = styled.div`
position: absolute;
bottom:30%;
text-align:center;
width:50%;
z-index:20;
padding:1rem;
border-radius: 29px;
background-color: ${({theme}) => theme.colors.grey};
line-height:1.5rem;
`

const Kursinnehåll = styled.ul`
list-style: none;
line-height:1.3rem;
`


const Nackademin = () => {
  const [doneCourses, setCourses] = useState([]);
  const [all, setAll] = useState([])
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setCourses(courses.filter(item => (item.done === true)))
    setAll(shuffle(courses))
    }, [])

    const shuffle = (array) => {
      let currentIndex = array.length, randomIndex;
      while (currentIndex != 0){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    
    const done = (doneCourses.length/courses.length *100);

    const data2 = {
      labels: [
        "Färdiga kurser (i procent)",
        "Ej klara kurser (i procent)"
      ],
      datasets: [{
        data: [`${done}` ,(100-`${done}`)],
        backgroundColor: [
          '#bee5f5',
          `#483d8b`,
        ],
        }],
    }
    const configdata2 = {
      borderWidth: 0,
      responsive: true,
      
      plugins: {
        legend: {
          display:false,
          position: 'bottom',
          labels:{
            color: "white",
          }
        },
        title: {
          display: false,
          text: 'Avklarade kurser:',
          color: "white",
        }
      }
    }

  return ( 
    <Container>
      <div>
    <h3>Frontendprogrammet</h3>
    <h4>Nackademin - Yrkeshögskola</h4>
    <p>2021-2023</p>
    <CounterWrapper>
      <CountingUp
      number={done}
      percent ={true}
      ></CountingUp>
      </CounterWrapper>
    <Wrapper>
      <Canvas
      data={data2}
      options={configdata2}/>
    </Wrapper>
  
      </div>
      <div className="second">
      <h3>Kurser på Nackademin:</h3>
      <WordCloud
      role="Image"
      alt="Tag cloud"
      aria-label= "Tag cloud">
        <>
      {all.map(item => {
        if ((item.done !== true)){
          if((item.title === "LIA 2")){
            return  <li key={item.id}
            data-weight={item.id}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="notDone">
              {item.title}*
            </li>
          }
          if((item.title === "LIA 1")){
            return  <li key={item.id}
            data-weight={item.id}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="notDone">
              {item.title}*
            </li>
          }
          
          return  <li key={item.id}
            data-weight={item.id}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="notDone">
              {item.title}
            </li>
          
        }
          else if((item.id %3 === 0)){
            return  <li key={item.id}
            data-weight={item.id}
            className="even"
            >
              {item.title}
              </li>
          }
          else if((item.id %2 === 0)) {
            return <li key={item.id}
            data-weight={item.id}
            className="uneven"
            >
              {item.title}
              </li>
          }
          else if ((item.id ===1)){
            return <li key={item.id}
            data-weight={item.id}
            className="uneven"
            >
              {item.title}
              </li>
          }
          else {
            return <li key={item.id}
            data-weight={item.id}
            className={item.betyg}
          >
              {item.title}
              </li>
          }
      })}
      </>
      </WordCloud>
      {isShown && (
        <HoverElement>
          Den här kursen är antingen igång eller kommer att bli klar under läsåret 2022-23.
        </HoverElement>
      )}
    
      </div>
      <Row>
      <Kursinnehåll>
          <h4>Kursinnehåll</h4>
          <li><b>Javascript 1 - </b>grundläggande javascript</li>
          <li><b>Javascript 2 - </b>API-anrop, fetch, querystrings och local storage</li>
          <li><b>Javascript 3 -</b> REACT och Redux</li>
          <li><b>Javascript 4 -</b> Tester</li>
          <li><b>JS som backend-språk -</b> Node JS </li>
          <li><b>Interaktion med CMS - </b> Strapi CMS, Postman och Axios </li>
        </Kursinnehåll>
      <h3>Totalt {doneCourses.length} av {courses.length} kurser avklarade</h3>
     
      <p>*LIA: Lärande I Arbete. Praktik på arbetsplats.<br/><Link href="https://vinnovera.se/">LIA 1  & 2 är jag praktikant hos webbyrån Vinnovera.</Link></p>
      <div>
      
      </div>
      </Row>
    </Container>
   );
}
 
export default Nackademin;