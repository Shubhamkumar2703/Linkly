import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  Filler
);

const Graph = ({ graphData = [] }) => {
  const hasData = graphData.length > 0;

  const labels = hasData
    ? graphData.map((item) => item.clickDate)
    : Array.from({ length: 14 }, () => "");

  const clicksPerDay = hasData
    ? graphData.map((item) => item.count)
    : [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Clicks",
        data: clicksPerDay,
        backgroundColor: hasData
          ? "rgba(99, 102, 241, 0.8)" // indigo-500
          : "rgba(99, 102, 241, 0.15)",
        borderRadius: 6,
        barThickness: 18,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#334155", // slate-700
          font: {
            size: 13,
            weight: "600",
          },
        },
      },
      tooltip: {
        backgroundColor: "#0f172a", // slate-900
        titleColor: "#fff",
        bodyColor: "#e5e7eb",
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(148, 163, 184, 0.2)", // slate-400
        },
        ticks: {
          color: "#475569",
          callback: (value) =>
            Number.isInteger(value) ? value : "",
        },
        title: {
          display: true,
          text: "Clicks",
          color: "#334155",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#475569",
        },
        title: {
          display: true,
          text: "Date",
          color: "#334155",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Graph;
