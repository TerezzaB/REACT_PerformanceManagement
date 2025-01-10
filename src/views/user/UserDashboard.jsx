import React from 'react';
import KPISection from '../../components/user/dashboard/KPISection';
import BudgetManagementSection from '../../components/user/dashboard/BudgetManagementSection';
import ChartSection from '../../components/user/dashboard/ChartSection';
import KPIMetrics from '../../components/user/dashboard/KPIMetrics';
import metrics from '../../data/metrics.json';

export default function UserDashboardView() {
  const { overview, budgetManagement, charts, kpiDetails } = metrics;

  console.log(metrics);

  const kpiMetricsOverview = Object.keys(overview.metrics).map((key) => ({
    title: key,
    value: overview.metrics[key].current,
    target: overview.metrics[key].target,
  }));
  

  const kpiMetricsChart = Object.keys(kpiDetails.metrics).map((key) => ({
    title: kpiDetails.metrics[key].metric,
    value: kpiDetails.metrics[key].current,
    target: kpiDetails.metrics[key].target,
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="space-y-8">
        <KPISection metrics={kpiMetricsOverview} />
        <BudgetManagementSection budget={budgetManagement} />
        <div className='flex flex-row gap-6'>
          <div className='w-1/2'><KPIMetrics meetrics={kpiMetricsChart} /> </div>
          <div className='w-1/2'><ChartSection charts={charts} /></div>
        </div>
      
      </div>
    </div>
  );
}
