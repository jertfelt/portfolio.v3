import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import styled from "styled-components";


import {Bar} from "react-chartjs-2";

const DougnoutItem = styled(Doughnut)`
max-width:100%;
margin-top:3rem;
`
const Canvas = ({data, options}) => {
 

  return (
      <DougnoutItem 
      data={data}
      options={options}
      />
    );
}
 
export default Canvas;