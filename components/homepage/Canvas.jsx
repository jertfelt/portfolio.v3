import { Doughnut } from "react-chartjs-2";
import { Chart,ArcElement, Tooltip, Legend } from "chart.js";
import 'chart.js/auto';
import styled from "styled-components";
import {flex} from "../styles/Styles";
import { courses } from "../../data/courses";
import { useEffect, useState } from "react";
import {Bar} from "react-chartjs-2";
import CountingUp from "./counter";

const Container = styled.div`
padding:3rem;
${flex}
h3{
  font-family: Arya;
  color:${({theme}) => theme.colors.lightblue};
  font-size:${({theme}) => theme.fontSizes.large};
}
font-family: Roboto;
line-height:1rem;
h4{
  margin-top:-1rem;
}
p{
  margin-top:-1rem;
}
`

const DougnoutItem = styled(Doughnut)`
max-width:100%;
margin-top:3rem;
`

const CounterWrapper = styled.span`
position: absolute;
margin-top:-3rem;`

const Wrapper = styled.div`
max-width:900px;`

const WordCloud = styled.ul`
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
}
.VG{
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.white};
}
`



const Canvas = () => {
  const [doneCourses, setCourses] = useState([]);
  useEffect(() => {
    const passed = courses.filter(item => (item.done === true))
    setCourses(passed)
    }, [])
    
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
      <h3>Frontendprogrammet</h3>
      <h4>Nackademin - Yrkeshögskola</h4>
      <p>2021-2023</p>
      <Wrapper>
      <DougnoutItem 
      data={data2}
      options={configdata2}
      />
      
      </Wrapper>
      <CounterWrapper>
      <CountingUp
      number={done}
      percent ={true}
      ></CountingUp>
      </CounterWrapper>
      <WordCloud
      role="Image"
      alt="Tag cloud"
      aria-label= "Tag cloud">
      {doneCourses.map(item => {
        if((item.id %3 === 0)){
          return  <li key={item.id}
          data-weight={item.id}
          className="even">
            {item.title}
            </li>
        }
        else if((item.id %2 === 0)) {
          return <li key={item.id}
          data-weight={item.id}
          className="uneven">
            {item.title}
            </li>
        }
        else if ((item.id ===1)){
          return <li key={item.id}
          data-weight={item.id}
          >
            {item.title}
            </li>
        }
        else {
          return <li key={item.id}
          data-weight={item.id}
          className={item.betyg}>
            {item.title}
            </li>
        }
      })
       
      }
      </WordCloud>
      <h3>Totalt {doneCourses.length} av {courses.length} kurser avklarade</h3>
    </Container>
    );
}
 
export default Canvas;