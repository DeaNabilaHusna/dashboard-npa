import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

import { LineChartData } from "../../utils/data.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const LineGraph = () => {

  const options = {
    responsive: true,
    maintainAspectRatio: true,

    scales: {
      x: {
        grid: {
          display: false, 
          autoskip: false,
        },
      },
      y: {
        grid: {
          display: false, 
          stepSize: 2, 
        },
        ticks: {
          callback: function(value) {
            const allowedTicks = [8, 10, 12, 14, 16];
            if (allowedTicks.includes(value)) {
              return value; 
            }
            return ''; 
          },
        },
        min: 8,  
        max: 16, 
      }
    }
  };
  
  return <div style={{minHeight: "auto", overflowX: "auto", overflow:"hidden" }}><Line options={options} data={LineChartData} /></div>
   
  
};

export default LineGraph;
