export default function KPISection({ metrics }) {
  if (!metrics || metrics.length === 0) {
    return <p className="text-gray-500">No metrics available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="ps-6 pe-2 py-4 shadow-lg rounded-lg border-l-4 hover:shadow-xl transition-shadow text-left text-white bg_kpi_gradient"
        >
          <h4 className="font-semibold text-lg">{metric.title}</h4>
          <p className="text-2xl font-bold mt-2">{metric.value}</p>
          <p className="text-sm">Target: {metric.target}</p>
        </div>
      ))}
    </div>
  );
}
