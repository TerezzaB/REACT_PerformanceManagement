export default function KPISection({ metrics }) {
    if (!metrics || metrics.length === 0) {
      return <p className="text-gray-500">No metrics available</p>;
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
          >
            <h4 className="font-semibold text-gray-600 text-lg">{metric.title}</h4>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {metric.value}
            </p>
            <p className="text-sm text-gray-500">Target: {metric.target}</p>
          </div>
        ))}
      </div>
    );
  }
  