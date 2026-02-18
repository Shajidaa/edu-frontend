import { CheckCircle2 } from "lucide-react";
import MyButton from "../share/MyButton";

export default function FeatureSection({ title, subtitle, description, items, buttonText, imageSlot, reverse = false }:{title: string, subtitle: string, description: string, items: string[], buttonText: string, imageSlot: React.ReactNode, reverse?: boolean}) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 py-20`}>
      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-orange-400" /> {/* Brand Dot */}
        <span className="font-bold text-xl text-slate-900">{title}</span>
      </div>
      <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">{subtitle}</h2>
      <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
            <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={18} />
            {item}
          </li>
        ))}
      </ul>
      <MyButton href="/" className="bg-lime-400 hover:bg-lime-500! text-slate-900! font-bold py-3 px-8 rounded-full transition-all border border-slate-900/10">
        {buttonText}
      </MyButton>
    </div>

    {/* Graphic Slot */}
    <div className="w-full md:w-1/2 flex justify-center">
      {imageSlot}
    </div>
  </div>
);}