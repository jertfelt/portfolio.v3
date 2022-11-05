import { Doughnut } from "react-chartjs-2";
import { Chart,ArcElement, Tooltip, Legend } from "chart.js";
import 'chart.js/auto';
import styled from "styled-components";


const data = {
  labels: [
    'Basic JS',
    'NodeJS',
    'React',
    'CSS',
    'HTML',
    'Tillgänglighet',
    'Strapi',
    'CMS-system',
    'Projektmetodik Frontend',
  ],
  datasets: [{
    label: 'Nackademin',
    data: [7, 2, 1, 3, 10, 4, 1, 1, 3],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const data2 = {
  borderWidth: 0,
  labels: [
    "Färdiga kurser",
    "Kvar"
  ],
  datasets: [{
    borderWidth: 0,
    label:"Kurser kvar:",
    data: [10, (14-10)],
    backgroundColor: [
      '#bee5f5',
      `#483d8b`,
    ],
  }],
  options:{
    plugins:{
     
    legend:{
      labels: {
        color: "yellow", 
      },
      display:false
    },
  }
  }
}


const Canvas = () => {

  return (
    <>
    <Doughnut 
    data={data2}
    />
    <Doughnut 
    data={data}
    />
    </>
    );
}
 
export default Canvas;