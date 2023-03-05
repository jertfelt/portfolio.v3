import Canvas from "./Canvas";
import {flex, device} from "../styles/Styles";
import styled from "styled-components"
import CountingUp from "./counter";
import Link from "next/link";
import { courses } from "../../data/courses";
import { useEffect, useState } from "react";
import { ContactButton } from "../styles/Button.styled";

const Container = styled.section`
gap:30px;
margin-top:-3rem;

h3{
  line-height:1.5em;
  text-align: left;
  font-family: Arya;
  color:${({theme}) => theme.colors.lightblue};
  font-size:${({theme}) => theme.fontSizes.large};
}

font-family: Roboto;

h4{
  margin-top:-1rem;
}

p{


  line-height:1.5rem;
  a{
    text-decoration: none;
    color:${({theme}) => theme.colors.lightblue};
  }
}
`


const NackademinGrid = styled.div`
display:grid;
gap: 1rem;
width:100%;
@media ${device.tablet}{
  grid-template-columns: repeat(2, 1fr)
}


`

const Row = styled.div`
display:flex;
gap:1rem;
align-items:center;
`



const WordCloud = styled.ul`
@media ${device.tablet}{max-width:70%; }
list-style: none;
padding-left: 0;
display: flex;
flex-wrap: wrap;
align-items: start;
justify-content: start;
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
  font-weight: bold;
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
  color: ${({theme}) => theme.colors.vividblue};
  font-weight:bold;
}
`
const HoverElement = styled.div`
position: absolute;
bottom:10%;
left:50%;
text-align:center;
width:20%;
z-index:20;
padding:1rem;
border-radius: 29px;
background-color: ${({theme}) => theme.colors.purple};
line-height:1.5rem;
`

const Kursinnehåll = styled.ul`
list-style: none;
line-height:1.3rem;
padding-left:0;
`
const Table = styled.table`
border: 1px solid;
padding:10px;
border-radius:29px;
th{padding-right:2rem;
  padding-bottom:.5rem;
height:30px;}
tr{
  text-align:left;
}
th, td{
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
.notDone{
  color:${({theme}) => theme.colors.vividblue};
}
tr:hover{
  background-color:${({theme}) => theme.colors.lavendel};
}
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
          `#766c5a`,
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
    <NackademinGrid>
      <div>
    <h3>Frontendprogrammet</h3>
    <h4>Nackademin - Yrkeshögskola</h4>
    <p>2021-2023</p>
    </div>
    <Row>
    <Canvas
      data={data2}
      options={configdata2}/>
            <h3>Totalt {doneCourses.length} av {courses.length} kurser avklarade</h3>
    </Row>
    <div>
    <Table>
  <tr>
    <th>Kurs</th>
    <th>Betyg</th>
    <th>Omfattning</th>
  </tr>
  {all.map(item => {
    if((item.done !== true)){
      return <tr className="notDone"
      onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
      key={item.id}>
        <td>{item.title}</td>
        <td>N/A</td>
        <td>{item.omfattning}</td>
      </tr>
    }

    else{
      return <tr
      key={item.id}
      >
        <td>{item.title}</td>
        <td>{item.betyg}</td>
        <td>{item.omfattning}</td>
      </tr>
    }
  })}

</Table>
      {isShown && (
        <HoverElement>
          Den här kursen är antingen igång eller kommer att bli klar under läsåret 2022-23.
        </HoverElement>
      )}

      </div>
      
    <div>

      <Kursinnehåll>
          <h4>Kursbeskrivning:</h4>
          <li><b>Javascript 1 - </b>grundläggande javascript</li>
          <li><b>Javascript 2 - </b>API-anrop, fetch, querystrings och local storage</li>
          <li><b>Javascript 3 -</b> React och Redux</li>
          <li><b>Javascript 4 -</b> Tester med React och Jest</li>
          <li><b>JS som backend-språk -</b> Node JS </li>
          <li><b>Interaktion med CMS - </b> Strapi CMS, Postman och Axios </li>
          <li><b>Frontend-projekt - </b> Hur man jobbar i grupparbete </li>
          <li><b>LIA 1 & 2 - </b> Lärande I Arbete. Praktik på arbetsplats.</li>
        </Kursinnehåll>
        <ContactButton>
        <Link href="https://nackademin.se/utbildningar/frontend-utvecklare/">Läs mer på Nackademin</Link>
        </ContactButton>

      <div>

      </div>
      </div>

      </NackademinGrid>
    

    </Container>
   );
}

export default Nackademin;



{/* <WordCloud
role="Image"
alt="Tag cloud"
aria-label= "Tag cloud">
  <>
{all.map(item => {
  if ((item.done !== true)){

    return  <li key={item.id}
      data-weight={item.id}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="notDone">
        {item.title}
      </li>

  }
    else if((item.id %2 === 0)){
      return  <li key={item.id}
      data-weight={item.id}
      className="even"
      data-set={item.betyg}
      >{item.title} <br/>
      </li>
    }
    else if((item.id %1 === 0)) {
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


</WordCloud> */}