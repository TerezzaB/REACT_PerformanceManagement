import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartSection({ charts }) {
  const Chart = {
    labels: charts.conversions.labels,
    datasets: [
      {
        label: 'Conversions',
        data: charts.conversions.data,
        fill: false,
        borderColor: '#FFF', // Biela farba čiar
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Polopriesvitné pozadie
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: '#FFF'
        },
        ticks: {
          color: '#FFF'
        },
      },
      y: {
        grid: {
          color: '#FFF',
        },
        ticks: {
          color: '#FFF',
        },
      },
    },
    plugins: {
      legend: {
        display: false
      },
    },
  };

  return (
    <div className="bg_kpi_gradient shadow rounded-lg p-4 text-white">
      <h4 className="font-bold text-left text-lg mb-5">Conversions</h4>
      <Line data={Chart} options={options} />
    </div>
  );
}
