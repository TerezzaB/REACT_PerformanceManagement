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
  const conversionChart = {
    labels: charts.conversions.labels,
    datasets: [
      {
        label: 'Conversions',
        data: charts.conversions.data,
        fill: false,
        borderColor: '#4F46E5',
        tension: 0.1,
      },
    ],
  };

  const cpaChart = {
    labels: charts.cpa.labels,
    datasets: [
      {
        label: 'Cost Per Acquisition (CPA)',
        data: charts.cpa.data,
        fill: false,
        borderColor: '#10B981',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow rounded p-4">
        <h4 className="font-bold text-lg mb-2">Conversions</h4>
        <Line data={conversionChart} />
      </div>
      <div className="bg-white shadow rounded p-4">
        <h4 className="font-bold text-lg mb-2">Cost Per Acquisition (CPA)</h4>
        <Line data={cpaChart} />
      </div>
    </div>
  );
}
