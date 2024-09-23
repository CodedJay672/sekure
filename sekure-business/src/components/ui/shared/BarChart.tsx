"use client";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement
);

const BarChart = () => {
  const data = {
    labels: [
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
      '01-07 JANV',
    ],
    datasets: [
      {
        BorderRadius: 10,
        data: [130, 180, 250, 130, 95, 95, 170, 50, 140, 160, 50, 140],
        backgroundColor: '#18BC7A',
        barThickness: 4,
      }
    ]
  }

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
          color: '#403F3A',
          font: {
            size: 8,
          },
        },
      },
      y: {
        max: 250,
        ticks: {
          color: '#403F3A',
          font: {
            size: 8,
          },
          callback: function(value: string | number) {
            const numericValue = Number(value); // Convert the value to a number
            return numericValue > 0 ? numericValue + 'K' : numericValue; // Remove the 'K' from the y-axis labels
          },
        },
      },
    },
  }

  return (
    <div className='w-full h-[236.19px]'>
      <Bar data={data} height={100} options={options} />
    </div>
  )
}

export default BarChart
