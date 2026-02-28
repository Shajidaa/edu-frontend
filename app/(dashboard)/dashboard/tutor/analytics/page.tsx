import React from 'react';
import { 
  FaChartLine, FaUsers, FaClock, 
  FaWallet, FaArrowTrendUp, FaArrowTrendDown 
} from 'react-icons/fa6';

export default function AnalyticsPage() {
  const kpis = [
    { id: 1, label: 'Total Revenue', value: '$4,250', change: '+12.5%', trend: 'up', icon: <FaWallet /> },
    { id: 2, label: 'Session Hours', value: '128h', change: '+8.2%', trend: 'up', icon: <FaClock /> },
    { id: 3, label: 'Retention', value: '92%', change: '-2.1%', trend: 'down', icon: <FaUsers /> },
    { id: 4, label: 'Avg. Rating', value: '4.9', change: '0%', trend: 'neutral', icon: <FaChartLine /> },
  ];

  // Data for the bar graph
  const graphData = [
    { month: 'Sep', value: 45 },
    { month: 'Oct', value: 75 },
    { month: 'Nov', value: 60 },
    { month: 'Dec', value: 95 },
    { month: 'Jan', value: 70 },
    { month: 'Feb', value: 85 },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 font-sans">Performance Analytics</h1>
        <p className="text-slate-500 text-sm">Real-time data on your tutoring impact.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi) => (
          <div key={kpi.id} className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="p-2 w-fit bg-emerald-50 text-emerald-600 rounded-lg text-lg mb-3">
              {kpi.icon}
            </div>
            <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{kpi.label}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg md:text-2xl font-bold text-slate-800">{kpi.value}</h3>
              <span className={`text-[10px] font-bold ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* REVENUE GRAPH - THE FIX IS HERE */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-bold text-slate-800">Monthly Revenue</h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Earnings
              </span>
            </div>
          </div>
          
          {/* Graph Container with defined height */}
          <div className="relative h-64 w-full flex items-end justify-between gap-3 md:gap-6 px-2 border-b border-slate-100">
            {graphData.map((data, i) => (
              <div key={i} className="relative flex-1 flex flex-col items-center group h-full justify-end">
                {/* Tooltip */}
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] py-1 px-2 rounded mb-2 z-10 pointer-events-none">
                  ${data.value * 10}
                </div>
                
                {/* The Bar */}
                <div 
                  className="w-full max-w-[40px] bg-emerald-100 group-hover:bg-emerald-500 transition-all duration-300 rounded-t-md cursor-pointer"
                  style={{ height: `${data.value}%` }}
                ></div>
                
                {/* Month Label */}
                <span className="absolute -bottom-7 text-[10px] font-bold text-slate-400 whitespace-nowrap">
                  {data.month}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10"></div> {/* Spacer for labels */}
        </div>

        {/* Subject Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Engagement by Subject</h3>
          <div className="space-y-6">
            <AnalyticsBar label="Mathematics" percent={78} color="bg-emerald-500" />
            <AnalyticsBar label="Physics" percent={45} color="bg-teal-500" />
            <AnalyticsBar label="English" percent={30} color="bg-cyan-500" />
            <AnalyticsBar label="History" percent={15} color="bg-green-400" />
          </div>
          <button className="w-full mt-10 py-3 bg-emerald-50 text-emerald-700 font-bold text-sm rounded-xl hover:bg-emerald-100 transition-all">
            Download Full Report
          </button>
        </div>
      </div>
    </div>
  );
}

function AnalyticsBar({ label, percent, color }: { label: string, percent: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-slate-600">{label}</span>
        <span className="text-xs font-mono text-slate-400">{percent}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div 
          className={`${color} h-full rounded-full transition-all duration-700`} 
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}