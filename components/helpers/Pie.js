import { Pie} from "react-chartjs-2";
import 'chart.js/auto';
import styled from "styled-components";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const PieChart= ({data, options}) => {

  return (
      <Pie
      data={data}
      options={options}
      />
    );
}
 
export default PieChart;