import React from 'react';

export default function BudgetManagementSection({ budget }) {
  const { monthlyBudget, PNOTracking, dailySpend, dailyRevenue } = budget;

  const remaining =
    monthlyBudget.totalBudget < monthlyBudget.spent
      ? '-'
      : monthlyBudget.totalBudget - monthlyBudget.spent;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: 'Monthly Budget',
          data: monthlyBudget,
          remaining,
          isMonthlyBudget: true,
        },
        { title: 'PNO Tracking', data: PNOTracking },
        { title: 'Daily Spend', data: dailySpend },
        { title: 'Daily Revenue', data: dailyRevenue },
      ].map((item, index) => (
        <div
          key={index}
          className={`p-6 bg-white shadow-lg rounded-lg border-l-4 hover:shadow-xl transition-shadow`}
        >
          <h4 className="font-semibold text-gray-600 text-md mb-3">{item.title}</h4>

          {item.isMonthlyBudget ? (
            <>
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Total Budget:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.totalBudget}</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Spent:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.spent}</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Remaining:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.remaining}</div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black"
                    style={{
                      width: `${Math.min((item.data.spent / item.data.totalBudget) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Current:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.current}</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500">Target:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.target}</div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
