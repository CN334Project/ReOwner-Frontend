// components/SalesBarChart.js

import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const SalesBarChart = ({ salesData }) => {
  // Extract product names and amounts from sales data
  const monthNames = salesData.map((sale) => sale.month);
  const salesEachMonth = salesData.map((sale) => sale.sales);

  // Define data for the bar chart
  const data = {
    labels: monthNames,
    datasets: [
      {
        label: "Amount",
        data: salesEachMonth,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="mt-8 font-en-font text-xl mb-5">Sales Bar Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default SalesBarChart;
