
import { 
  FaCalendarPlus, FaVideo, FaClock, 
  FaExternalLinkAlt, FaRegCalendarCheck, FaCircle 
} from 'react-icons/fa';

export default function SchedulePage() {
  const todaySessions = [
    { id: 1, student: 'Shajida Islam', time: '09:00 AM', subject: 'Calculus II', type: 'Calendly' },
    { id: 2, student: 'Alex Rivera', time: '11:30 AM', subject: 'Physics 101', type: 'Zoom' },
    { id: 3, student: 'Courtney Henry', time: '02:00 PM', subject: 'Chemistry', type: 'Calendly' },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">My Schedule</h1>
          <p className="text-slate-500 text-sm">View your upcoming sessions and manage your availability.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all">
            <FaCalendarPlus /> Add Slot
          </button>
          <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100">
            Open Calendly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Today's Timeline */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FaRegCalendarCheck className="text-emerald-500" /> Today&lsquo;s Sessions
            </h3>
            
            <div className="space-y-0">
              {todaySessions.map((session, index) => (
                <div key={session.id} className="relative pl-8 pb-8 last:pb-0">
                  {/* Timeline Line */}
                  {index !== todaySessions.length - 1 && (
                    <div className="absolute left-[11px] top-6 w-0.5 h-full bg-slate-100"></div>
                  )}
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 p-1 bg-white">
                    <FaCircle className="text-emerald-500 text-[12px]" />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-100 group hover:border-emerald-200 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-3 rounded-lg text-slate-400 font-mono text-xs font-bold shadow-sm">
                        {session.time}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{session.student}</h4>
                        <p className="text-xs text-slate-500">{session.subject}</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase px-2 py-1 bg-white border border-slate-200 rounded text-slate-400">
                        {session.type}
                      </span>
                      <button className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                        <FaVideo size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Availability & Calendly Settings */}
        <div className="space-y-6">
          {/* Calendly Sync Card */}
          <div className="bg-emerald-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold mb-2">Calendly Sync</h3>
              <p className="text-emerald-200 text-xs mb-4">Your availability is currently synced with your Calendly account.</p>
              <button className="flex items-center gap-2 text-xs font-bold bg-emerald-500 hover:bg-emerald-400 px-3 py-2 rounded-lg transition-colors">
                Manage Settings <FaExternalLinkAlt size={10} />
              </button>
            </div>
            {/* Background Decoration */}
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <FaClock size={120} />
            </div>
          </div>

          {/* Quick Availability Toggle */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 text-sm">Quick Availability</h3>
            <div className="space-y-3">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">{day}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}