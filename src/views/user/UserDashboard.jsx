import React from 'react';
import KPISection from '../../components/user/dashboard/KPISection';
import BudgetManagementSection from '../../components/user/dashboard/BudgetManagementSection';
import ChartSection from '../../components/user/dashboard/ChartSection';
import data from '../../data/data.json'; // Dáta z JSON súboru

export default function UserDashboardView() {
  const { overview, budgetManagement, charts } = data;

  const kpiMetrics = Object.keys(overview.metrics).map((key) => ({
    title: key,
    value: overview.metrics[key].current,
    target: overview.metrics[key].target,
  }));

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="space-y-8 space-x-2">
        <KPISection metrics={kpiMetrics} />
        <BudgetManagementSection budget={budgetManagement} />
        <ChartSection charts={charts} />
      </div>
    </div>
  );
}
