import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Legend, CategoryScale, registerables} from "chart.js";

ChartJS.register(Legend, CategoryScale, ...registerables)
function DoughnutChart({ chartData }) {
  return <Doughnut options={{maintainAspectRatio :false, plugins: {
    legend: {
      display: false,
    }
  }, cutout:'70%', borderRadius:50, margin:10 }} data={chartData} />;
}

export default DoughnutChart;