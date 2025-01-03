"use client";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(CategoryScale, LinearScale, Tooltip, BarElement);

interface State {
  state: {
    date: string;
    total: number;
  }[];
}

const BarChart: React.FC<State> = ({ state }) => {
  // make total transactions customizable
  const totalTransactios = state?.reduce((acc, item) => acc + item.total, 50);

  const data = {
    labels: state?.map((item) => item.date),
    datasets: [
      {
        BorderRadius: 10,
        data: state?.map((item) => item.total),
        backgroundColor: "#18BC7A",
        barThickness: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#403F3A",
          font: {
            size: 8,
          },
        },
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
      y: {
        max: totalTransactios,
        ticks: {
          color: "#403F3A",
          font: {
            size: 8,
          },
          callback: function (value: string | number) {
            const numericValue = Number(value); // Convert the value to a number
            return numericValue / 1000 > 1
              ? numericValue / 1000 + "K"
              : numericValue; // Remove the 'K' from the y-axis labels
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[236.19px]">
      <Bar data={data} height={100} options={options} />
    </div>
  );
};

export default BarChart;
