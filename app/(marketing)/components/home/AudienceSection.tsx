

export default function AudienceSection() {
  const cards = [
    { title: "Educators", color: "bg-[#facc15]", text: "For teachers, the right tools and support mean less time spent on paperwork and more time spent shaping young minds." },
    { title: "Schools & Districts", color: "bg-[#f97316]", text: "Give administrators the ability to gather school and district-wide insights, deliver benchmarks, and ensure students are ready for state tests." },
    { title: "Tutors", color: "bg-[#bfdbfe]", text: "The right tutor can change the course of a student's future. If you're passionate about tutoring, we want to hear from you." }
  ];

  return (
    <section className="bg-[#0f3d2e] py-24 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">You help students. We help you.</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="bg-[#1a4d3c] p-10 rounded-[40px] relative pt-16 flex flex-col items-center">
            <div className={`absolute -top-6 w-14 h-14 rounded-full ${card.color} border-4 border-[#0f3d2e] flex items-center justify-center text-xl`}>
              🏫
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">{card.title}</h3>
            <p className="text-gray-300 mb-10 leading-relaxed">{card.text}</p>
            <button className="mt-auto w-full bg-[#bef264] text-black font-bold py-3 rounded-full border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};