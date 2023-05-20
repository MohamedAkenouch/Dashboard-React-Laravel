import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Legend, CategoryScale, registerables} from "chart.js";

ChartJS.register(Legend, CategoryScale, ...registerables)
function LineChart({ chartData }) {
  return <Line options={{maintainAspectRatio :false, plugins: {
    legend: {
      display: false,
    }
  } }} data={chartData} />;
}

export default LineChart;