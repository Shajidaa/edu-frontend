
import MyContainer from '../share/MyContainer';

export default function LessonFeature() {
  return (
    <section className="bg-[#fdfcf5] py-20 px-6 overflow-hidden">
      <MyContainer className=" flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side Content */}
        <div className="lg:w-1/2 space-y-6">
          <span className="bg-[#facc15] text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
            New!
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
            Lessons in &lt; a minute
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
            Use the instant lesson package tool to generate customizable lessons, 
            practice sets, and tests on any topic, differentiated for multiple 
            student groups, in under a minute.
          </p>
          <button className="bg-[#bef264] text-black font-bold px-8 py-3 rounded-full border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
            Learn more
          </button>
        </div>

        {/* Right Side UI Mockup */}
        <div className="lg:w-1/2 relative flex justify-center">
          {/* Blue Decorative Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-80 h-80 bg-[#4f84e1] rounded-full -z-10 opacity-90 clip-path-half-circle"></div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 max-w-md w-full transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <h4 className="font-bold text-gray-800 mb-4">Materials to Generate</h4>
            <div className="flex gap-2 mb-6">
              <div className="bg-[#f0f9ff] p-2 rounded flex items-center gap-2 text-xs font-medium text-gray-600 border border-blue-100">
                <input type="checkbox" checked readOnly className="accent-green-600"/> Pear Deck
              </div>
              <div className="bg-[#f0f9ff] p-2 rounded flex items-center gap-2 text-xs font-medium text-gray-600 border border-blue-100">
                <input type="checkbox" checked readOnly className="accent-green-600"/> Pear Practice
              </div>
            </div>
            
            <div className="bg-[#eef2ff] p-4 rounded-xl border border-blue-200 mb-6">
              <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">Transform material from:</p>
              <div className="flex items-center gap-3">
                 <div className="bg-blue-500 text-white p-2 rounded">⚡</div>
                 <div>
                    <p className="text-sm font-bold">5th Grade Lesson Plan on the Rock Cycle</p>
                    <p className="text-xs text-gray-500">Lesson Plan</p>
                 </div>
              </div>
            </div>

            <button className="w-full bg-[#166534] text-white font-bold py-3 rounded-full text-sm">
              Create Materials (3)
            </button>
          </div>
        </div>

      </MyContainer>
    </section>
  );
}