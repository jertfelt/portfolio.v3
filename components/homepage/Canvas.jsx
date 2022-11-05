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
    'CMS-system',
    'Projektmetodik Frontend',
  ],
  datasets: [{
    data: [7, 2, 1, 3, 10, 4, 1, 3],
    backgroundColor: [
      '#344ce6',
      'black',
      '#282828',
      "#f4f4f4",
      "#bee5f5",
    ],
    borderWidth: 0,
    hoverOffset: 10
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
    labels: {
      display: false
    },
    data: [10, (14-10)],
    backgroundColor: [
      '#bee5f5',
      `#483d8b`,
    ],
  }],
  options:{
    plugins:{
    legend:{
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