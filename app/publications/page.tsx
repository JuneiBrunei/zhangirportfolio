import Link from 'next/link';

export default function Publications() {
  const published = [
    {
      title: "PRICE RISE: A THREAT OR A CHANCE?",
      source: "Ogni Alatau newspaper",
      date: "Sep 2024",
      link: "https://ognialatau.kz/news/cat-1/30382/",
      description: "A comprehensive analysis of inflation trends and their impact on regional economies in Kazakhstan. Focused on socio-economic challenges and potential policy interventions to mitigate rising living costs."
    },
    {
      title: "FOOD PRODUCTS IN KAZAKHSTAN: CAUSES AND SOLUTIONS",
      source: "Central Asian Scientific Journal",
      date: "Sep 2024",
      link: "https://cajournal.kz/vol/2024/vol4(23).pdf",
      description: "A multi-methodological study analyzing the escalation of food costs in Almaty (2022–2024). Based on field interviews with agricultural officials, farm owners, and business leaders to identify structural gaps in supply chains and the impact of regional geopolitical instability."
    }
  ];

  const independent = [
    {
      title: "DOES STADIUM DESIGN INFLUENCE HOME ADVANTAGE?",
      type: "Sports Economics Research",
      link: "https://docs.google.com/document/d/12yRpuLwr4DTC_zljepQFwRndYe_aiZCuy_RfKRzZ19s/edit?usp=sharing",
      description: "A quantitative study on the nexus between stadium architecture and team performance across Serie A, Bundesliga, and Ligue 1. The research employs multi-variable analysis—integrating squad market value, fan proximity, and attendance—to identify whether modern stadium design truly amplifies the 'home advantage' or if economic factors remain the dominant driver."
    },
    {
      title: "ENHANCING STUDENT GOVERNANCE VIA ELECTION REFORM",
      type: "Political Science & Education",
      link: "https://docs.google.com/document/d/1HDlKMyaB9EeHCTIEoWn_7x1cUg-_jPj-X9BZAd3flPI/edit?usp=sharing",
      description: "A political science proposal for transitioning student governance to a parliamentary model. The research evaluates methods to minimize administrative interference and institutionalize student leadership, advocating for a shift from symbolic representation to a genuine democratic framework within educational institutions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
        
        {/* Navigation */}
        <Link href="/" className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-12 block hover:opacity-70 transition-opacity">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-black mb-16 italic tracking-tight uppercase">Research & Publications</h1>
        
        {/* Section 1: Published Works */}
        <section className="mb-16">
          <h2 className="text-[14px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
             Academic & Media <span className="h-[1px] w-12 bg-blue-600"></span>
          </h2>
          <div className="space-y-12">
            {published.map((pub, i) => (
              <article key={i} className="group relative">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block mb-2">{pub.date}</span>
                <h3 className="text-3xl font-black group-hover:text-blue-600 transition-colors leading-tight uppercase italic mb-3">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                </h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">{pub.source}</p>
                <p className="text-slate-600 text-lg leading-relaxed">{pub.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Independent Research */}
        <section className="mb-20">
          <h2 className="text-[14px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
             Independent Research <span className="h-[1px] w-12 bg-blue-600"></span>
          </h2>
          <div className="flex flex-col gap-8">
            {independent.map((res, i) => (
              <a 
                key={i} 
                href={res.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black px-3 py-1 bg-slate-900 text-white rounded-lg uppercase tracking-widest">{res.type}</span>
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                  </div>
                  <h3 className="text-2xl font-black leading-tight mb-4 group-hover:text-blue-600 uppercase italic transition-colors text-left">
                    {res.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed text-left max-w-2xl">{res.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer - Moved Up */}
        <footer className="pt-10 border-t border-slate-100 text-center">
          <p className="text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em]">
            Zhangir Yerkassym • Research Portfolio
          </p>
        </footer>

      </main>
    </div>
  );
}