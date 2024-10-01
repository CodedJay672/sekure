"use client";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

interface StatsCardProps {
  entry: number[];
}

const StatsCard: React.FC<StatsCardProps> = ({ entry }) => {

  const data = {
    backgroundColor: ['#242424', '#33E89C' ],
    labels: ['visa', 'mastercard'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [entry[0], entry[1]],
        backgroundColor: ['#242424', '#33E89C' ],
        hoverOffset: 4,
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    layout: {
      padding: {
        right: 90,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 10,
          font: {
            size: 12,
            lineHeight: 16,
          }
        }
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    cutout: "80%",
    elements: {
      arc: {
        borderWidth: 1,
      }
    },
  }

  return (
    <article className="py-3 rounded-[10px] flex w-[268x] h-[97px]">
      <Doughnut data={data} options={options} />
    </article>
  )
}

export default StatsCard
