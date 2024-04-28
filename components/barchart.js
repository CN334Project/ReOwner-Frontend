// components/SalesBarChart.js

import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
import { useEffect, useState } from "react";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const SalesBarChart = ({ salesData }) => {
  const [categoryName, setCategoryName] = useState([
    "furniture",
    "decor",
    "lighting",
    "clothing",
  ]);
  const [categoryVal, setCategoryVal] = useState([]);

  const loadProductCategory = async () => {
    const API_URL = `http://localhost:3005/cart/category`;
    try {
      const result = await fetch(API_URL, {
        method: "POST",
      });
      if (result.ok) {
        return await result.text();
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const result = await loadProductCategory();
        let totalProduct = [];
        Array.from(categoryName).forEach((name) => {
          totalProduct.push(JSON.parse(result)[name]);
        })
        setCategoryVal(totalProduct);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategoryData();
  });

  // Define data for the bar chart
  const data = {
    labels: categoryName,
    datasets: [
      {
        label: "Amount",
        data: categoryVal,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="mt-8 font-en-font text-xl mb-5">Category Sales</h2>
      <Bar data={data} />
    </div>
  );
};

export default SalesBarChart;
