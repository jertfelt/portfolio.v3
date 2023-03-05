import { Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import styled from "styled-components";

const DougnoutItem = styled(Doughnut)`
max-width:100px;
max-height:100px;
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