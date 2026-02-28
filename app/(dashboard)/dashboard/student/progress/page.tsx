

import { 
  FaGraduationCap, FaClock, FaCalendarCheck, 
  FaTrophy 
} from 'react-icons/fa';

const ProgressPage = () => {
 

  const stats = [
    { id: 1, label: 'Sessions', value: '24', icon: <FaCalendarCheck />, color: 'bg-emerald-100 text-emerald-600' },
    { id: 2, label: 'Hours', value: '156h', icon: <FaClock />, color: 'bg-green-100 text-green-600' },
    { id: 3, label: 'Courses', value: '8', icon: <FaGraduationCap />, color: 'bg-teal-100 text-teal-600' },
    { id: 4, label: 'Points', value: '1,250', icon: <FaTrophy />, color: 'bg-lime-100 text-lime-600' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      
   


     

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Learning Progress</h1>
          <p className="text-sm md:text-base text-gray-500">Track your growth and upcoming Calendly meetings.</p>
        </header>

        {/* Stats Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${stat.color} flex items-center justify-center text-lg md:text-xl mb-4`}>
                {stat.icon}
              </div>
              <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Lower Section: Stacks on mobile, Side-by-side on desktop */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Progress Bars */}
          <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-6 text-gray-800">Course Completion</h3>
            <div className="space-y-6">
              <ProgressBar label="Mathematics (Calculus)" progress={75} color="bg-green-500" />
              <ProgressBar label="English Literature" progress={40} color="bg-emerald-500" />
              <ProgressBar label="Computer Science" progress={90} color="bg-teal-500" />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Recent Activity</h3>
            <div className="flow-root">
              <ul className="-mb-8">
                <ActivityItem title="Met with Sarah " date="Today, 2:00 PM" type="Calendly" />
                <ActivityItem title="Completed Algebra Quiz" date="Yesterday" type="Course" />
                <ActivityItem title="Resource: Physics PDF" date="Feb 24" type="Download" />
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};




const ProgressBar = ({ label, progress, color }: { label: string, progress: number, color: string }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <span className="text-sm font-bold text-gray-800">{progress}%</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-3">
      <div className={`${color} h-3 rounded-full transition-all duration-500`} style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

const ActivityItem = ({ title, date, type }: { title: string, date: string, type: string }) => (
  <li className="relative pb-8">
    <span className="absolute top-4 left-2 -ml-px h-full w-0.5 bg-gray-100"></span>
    <div className="relative flex space-x-3">
      <div>
        <span className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white"></span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{date} • <span className="text-green-600 font-medium">{type}</span></p>
      </div>
    </div>
  </li>
);

export default ProgressPage;