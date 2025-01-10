import React from 'react';

export default function KPIMetrics({ meetrics }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b py-3 px-4 text-left text-sm font-medium text-gray-500">Metric</th>
              <th className="border-b py-3 px-4 text-left text-sm font-medium text-gray-500">Current</th>
              <th className="border-b py-3 px-4 text-left text-sm font-medium text-gray-500">Target</th>
              <th className="border-b py-3 px-4 text-center text-sm font-medium text-gray-500">Status</th>
            </tr>
          </thead>
          <tbody>
            {meetrics.map((metric, index) => (
              <tr key={index}>
                <td className="border-b py-3 px-4 text-left text-gray-700 text-sm">{metric.title}</td>
                <td className="border-b py-3 px-4 text-left text-gray-700 text-sm">{metric.value}</td>
                <td className="border-b py-3 px-4 text-left text-gray-700 text-sm">{metric.target}</td>
                <td className="border-b py-3 px-4">
                  {metric.value >= metric.target ? (
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-xl">Met</span>
                  ) : (
                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded-xl">Not Met</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
