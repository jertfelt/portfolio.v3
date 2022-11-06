import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import styled from "styled-components";


import {Bar} from "react-chartjs-2";

const DougnoutItem = styled(Doughnut)`

margin-top:3rem;
`
const Canvas = ({data, options}) => {

  return (
      <DougnoutItem 
      className="chart"
      data={data}
      options={options}
      />
    );
}
 
export default Canvas;