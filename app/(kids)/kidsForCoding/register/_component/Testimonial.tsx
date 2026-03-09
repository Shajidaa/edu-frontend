import { Star } from 'lucide-react'


export default function Testimonial() {
  return (
     <div className="hidden md:flex flex-col space-y-6">
          <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 relative">
            <span className="text-6xl text-orange-200 absolute top-4 left-4 font-serif">“</span>
            <p className="text-gray-700 text-lg leading-relaxed pt-6 italic relative z-10">
              The teachers at Next Gen learning are very knowledgeable, warm and supportive. 
              I am happy learning to code under their guidance.
            </p>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full overflow-hidden border-2 border-white shadow-sm">
                 <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hadiqah" 
                  alt="Student" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Hadiqah</h4>
                <p className="text-sm text-gray-500 font-medium">Student | Grade 1</p>
              </div>
            </div>
          </div>

          {/* Trustpilot Placeholder */}
          <div className="flex flex-col space-y-1">
             <div className="flex items-center space-x-1">
                <Star className="fill-green-500 text-green-500 w-4 h-4" />
                <span className="font-bold text-sm">Trustpilot</span>
             </div>
             <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-green-500 p-1 rounded-sm">
                        <Star className="fill-white text-white w-3 h-3" />
                    </div>
                ))}
             </div>
             <p className="text-xs text-gray-500">TrustScore 4.8 | 547 reviews</p>
          </div>
        </div>
  )
}
