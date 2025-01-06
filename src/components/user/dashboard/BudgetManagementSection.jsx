export default function BudgetManagementSection({ budget }) {
    const { monthlyBudget, PNOTracking, dailySpend, dailyRevenue } = budget;
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Monthly Budget', data: monthlyBudget, color: 'blue-500' },
          { title: 'PNO Tracking', data: PNOTracking, color: 'green-500' },
          { title: 'Daily Spend', data: dailySpend, color: 'red-500' },
          { title: 'Daily Revenue', data: dailyRevenue, color: 'purple-500' },
        ].map((item, index) => (
          <div
            key={index}
            className={`p-6 bg-white shadow-lg rounded-lg border-l-4 border-${item.color} hover:shadow-xl transition-shadow`}
          >
            <h4 className="font-semibold text-gray-600 text-lg">{item.title}</h4>
            <p className="text-xl font-bold text-gray-800 mt-2">
              Current: {item.data.current}
            </p>
            <p className="text-sm text-gray-500">Target: {item.data.target}</p>
          </div>
        ))}
      </div>
    );
  }
  