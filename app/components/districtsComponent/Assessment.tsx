
import MyContainer from '../share/MyContainer'
import FeatureSection from './FeatureSection'

export default function Assessment() {
  return (
    <div className='bg-[#FDFCF6]'>
   <MyContainer className="px-6  ">    
      <FeatureSection 
        reverse
        title="Next Gen Assessment"
        subtitle="Design and deploy common and formative assessments"
        description="The complete assessment solution embraced by teachers and administrators alike."
        items={[
          "Creates a consistent experience across classrooms.",
          "Sustainable adoption allows for more data to be collected for review.",
          "Helps teachers make data-informed decisions about instruction.",
          "Allows for consolidation of tools."
        ]}
        buttonText="Request a demo"
        imageSlot={
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 w-full">
            <div className="flex justify-around mb-8">
              {['Below', 'Basic', 'Proficient'].map((l) => (
                <span key={l} className="px-4 py-1 rounded-full border border-slate-300 text-xs font-bold text-slate-500">{l}</span>
              ))}
            </div>
            <div className="flex items-end justify-between h-48 gap-4 px-4">
              {[ {h: 'h-4/5', v: '54%'}, {h: 'h-3/4', v: '72%'}, {h: 'h-full', v: '88%'} ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-bold">{bar.v}</span>
                  <div className={`w-full ${bar.h} flex flex-col`}>
                    <div className="flex-2 bg-emerald-800 rounded-t-sm" />
                    <div className="flex-1 bg-yellow-400" />
                    <div className="flex-1 bg-orange-500 rounded-b-sm" />
                  </div>
                  <span className="text-xs text-slate-400">Topic {String.fromCharCode(65 + i)}</span>
                </div>
              ))}
            </div>
          </div>
        }
      /></MyContainer>
    </div>
 
  )
}
