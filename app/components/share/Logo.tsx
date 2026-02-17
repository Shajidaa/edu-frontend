import Link from "next/link";


export default function Logo() {
  return (
   <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-xl">🎓</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-slate-800 text-lg">Next Gen</span>
              <span className="font-bold text-slate-800 text-lg leading-3">Learning</span>
              <span className="text-[10px] text-gray-500 mt-1">by GoGuardian</span>
            </div>
          </Link>
  )
}
