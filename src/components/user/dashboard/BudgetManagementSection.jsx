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
        { title: 'Monthly Budget', data: monthlyBudget, remaining, isMonthlyBudget: true },
        { title: 'PNO Tracking', data: PNOTracking, isPNO: true },
        { title: 'Daily Spend', data: dailySpend, isDailySpend: true },
        { title: 'Daily Revenue', data: dailyRevenue, isRevenue: true },
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
          ) : item.isPNO ? (
            <>
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Target:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.target}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Current:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.current}</div>
              </div>

              {/* Display Alert */}
              {item.data.current > item.data.target ? (
                <div className="p-2 mt-4 border-2 text-xs border-red-500 rounded-lg bg-red-50 text-red-600 text-center font-semibold">
                  PNO is above target by{' '}
                  <span className="font-bold">
                    {((item.data.current - item.data.target) / item.data.target * 100).toFixed(1)}%
                  </span>
                </div>
              ) : (
                <div className="p-2 mt-4 text-xs border-2 border-green-500 rounded-lg bg-green-50 text-green-600 text-center font-semibold">
                  PNO is within the target range
                </div>
              )}
            </>
          ) : item.isDailySpend ? (
            <>
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Target:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.target}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Current:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.current}</div>
              </div>

              {/* Display Alert */}
              {item.data.current > item.data.target ? (
                <div className="p-2 mt-4 border-2 text-xs border-red-500 rounded-lg bg-red-50 text-red-600 text-center font-semibold">
                  Spending is not on track
                </div>
              ) : (
                <div className="p-2 mt-4 text-xs border-2 border-green-500 rounded-lg bg-green-50 text-green-600 text-center font-semibold">
                  Spending on track
                </div>
              )}
            </>
          ) : item.isRevenue ? (
            <>
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Target:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.target}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-semibold text-gray-500 mt-2">Current:</div>
                <div className="text-sm font-bold text-gray-800 mt-2">{item.data.current}</div>
              </div>

              {/* Display Alert */}
              {item.data.current > item.data.target ? (
                <div className="p-2 mt-4 border-2 text-xs border-red-500 rounded-lg bg-red-50 text-red-600 text-center font-semibold">
                  Revenue is not on track
                </div>
              ) : (
                <div className="p-2 mt-4 text-xs border-2 border-green-500 rounded-lg bg-green-50 text-green-600 text-center font-semibold">
                  Revenue on track
                </div>
              )}
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}
