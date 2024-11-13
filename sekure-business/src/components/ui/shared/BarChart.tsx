"use client";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "@/_lib/redux/hooks";

ChartJs.register(CategoryScale, LinearScale, Tooltip, BarElement);

const BarChart = () => {
  const state = useAppSelector(
    (state) => state.transactions.transactionSummary?.evolution_transactions
  );

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
      },
      y: {
        max: 250,
        ticks: {
          color: "#403F3A",
          font: {
            size: 8,
          },
          callback: function (value: string | number) {
            const numericValue = Number(value); // Convert the value to a number
            return numericValue > 0 ? numericValue + "K" : numericValue; // Remove the 'K' from the y-axis labels
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
