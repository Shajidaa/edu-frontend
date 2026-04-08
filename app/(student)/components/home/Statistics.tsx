import React from 'react';

export default function Statistics() {
  const stats = [
    {
      value: "8/10",
      text: "Teachers agree: 8/10 teachers say Pear Deck Learning solutions give them actionable data and insights.",
      sup: "1"
    },
    {
      value: "< 1 minute",
      text: "Create differentiated lesson packages in under 1 minute with Pear Deck Learning.",
      sup: "2"
    },
    {
      value: "4/5",
      text: "4/5 teachers agree that Pear Deck Learning provides tools that could support teachers across the entire instructional process.",
      sup: "3"
    }
  ];

  return (
    <section className="bg-[#e0f2fe] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`flex flex-col px-8 ${
              index !== stats.length - 1 ? 'md:border-r border-blue-300' : ''
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              {stat.value}
            </h2>
            <p className="text-[#0f172a] text-lg leading-snug">
              {stat.text}
              <sup className="text-xs ml-0.5">{stat.sup}</sup>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}