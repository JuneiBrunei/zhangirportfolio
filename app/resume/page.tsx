import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-3xl mx-auto px-6 py-12 animate-fade-in">
        
        {/* Navigation */}
        <Link href="/" className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-8 block hover:opacity-70 transition-opacity">
          ← Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-black tracking-tight mb-2 uppercase italic">Resume</h1>
          <p className="text-lg text-slate-500 italic">Academic path and professional qualifications.</p>
        </header>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Education</h2>
          <div className="space-y-8">
            
            {/* Università di Bologna */}
            <div className="relative border-l-2 border-slate-200 pl-8 ml-1">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#fcfcfc]"></div>
              <h3 className="text-2xl font-bold uppercase italic leading-tight">Università di Bologna</h3>
              <p className="text-base font-bold text-blue-600 mb-1 tracking-tighter uppercase">Bachelor in Economics and Finance • 2025 — 2028</p>
              <p className="text-slate-500 text-sm italic">Bologna, Italy</p>
            </div>

            {/* NIS */}
            <div className="relative border-l-2 border-slate-200 pl-8 ml-1">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-300 border-4 border-[#fcfcfc]"></div>
              <h3 className="text-2xl font-bold uppercase italic leading-tight text-slate-700">Nazarbayev Intellectual School</h3>
              <p className="text-base font-bold text-slate-500 mb-1 tracking-tighter uppercase font-mono">Physics and Mathematics • 2019 — 2025</p>
              <p className="text-slate-500 text-sm italic mb-4">Almaty, Kazakhstan</p>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full uppercase tracking-tighter">GPA 5.0/5.0</span>
                <span className="text-[10px] font-bold px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full uppercase tracking-tighter">"Altyn Belgi"</span>
                <span className="text-[10px] font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-tighter">IELTS 8.0</span>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Experience */}
        <section className="mb-12">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Leadership</h2>
          <div className="relative border-l-2 border-slate-200 pl-8 ml-1">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-4 border-[#fcfcfc]"></div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-2xl font-bold uppercase italic leading-tight">Parliament Speaker</h3>
              <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">2023 — 2025</span>
            </div>
            <p className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest font-mono">Student Council • NIS Almaty-Medeu</p>
            
            <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
<li className="flex gap-3">
<span className="text-blue-500 font-bold">/</span>
<span>Developed a comprehensive student governance methodology and initiated <span className="text-slate-900 font-semibold">100+ event concepts</span>.</span>
</li>
<li className="flex gap-3">
<span className="text-blue-500 font-bold">/</span>
<span>Drafted <span className="text-slate-900 font-semibold">16 legislative acts</span> to institutionalize student council operations.</span>
</li>
<li className="flex gap-3">
<span className="text-blue-500 font-bold">/</span>
<span>Participated in the “Lead to Inspire-2024” Republican Forum of Student Council Leaders in Kyzylorda.</span>
</li>
<li className="flex gap-3">
<span className="text-blue-500 font-bold">/</span>
<span>Supervised class communities (Shanyraks), coordinated point-based competition systems and administrative events.</span>
</li>
<li className="flex gap-3 items-center">
<span className="text-blue-500 font-bold">/</span>
<span>
Established an independent <span className="text-slate-900 font-semibold">Press Office</span> and managed institutional social media presence.
<a
href="https://www.instagram.com/speaker_phm_ala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
target="_blank"
rel="noopener noreferrer"
className="ml-1.5 inline-flex items-center gap-1 text-blue-600 font-bold border-b border-blue-200 hover:border-blue-600 transition-all"
>
Instagram
<span className="text-[10px]">↗</span>
</a>
</span>
</li>
</ul>
          </div>
        </section>

        {/* Awards */}
<section className="mb-6">
  {/* Увеличил с text-[10px] до text-xs */}
  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Awards</h2>
  <div className="grid gap-4">
    {[
      { title: "National Astronomy Competition", rank: "1st Place", date: "2022", desc: "Won among 90 participants and 40 research projects." },
      { title: "IX Al-Farabi Research Conference", rank: "3rd Place", date: "2022", desc: "Published investigation on scattered star clusters and numerical simulations." },
      { title: "Climate Science Olympiad", rank: "Semifinalist", date: "23 & 24", desc: "Top 55,000 participants globally. Missed finals by only 1 point." }
    ].map((award, i) => (
      <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl">
        <div className="flex justify-between items-center mb-2">
          {/* Увеличил с text-sm до text-base */}
          <h3 className="font-bold uppercase text-base italic">{award.title}</h3>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-900 text-white rounded">{award.rank}</span>
        </div>
        {/* Увеличил с text-xs до text-sm */}
        <p className="text-sm text-slate-500 leading-relaxed">{award.desc}</p>
      </div>
    ))}
  </div>
</section>

        {/* Skills & Qualifications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-10">
          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Qualifications</h2>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Degrees</p>
                <p className="text-base font-bold text-slate-800">Trainer Degree (Tenge-ten Kazakh Association)</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-widest">Courses</p>
                <p className="text-sm text-slate-600 font-medium italic">Rice University: Principles of Economics</p>
                <p className="text-sm text-slate-600 font-medium italic">UPenn: Fintech Foundations & Applications</p>
                <p className="text-sm text-slate-600 font-medium italic">National Geographic: Young Explorers</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Languages</h2>
            <div className="space-y-5">
              {[
                { name: "English", level: "IELTS 8.0 / C1", width: "w-[95%]" },
                { name: "Kazakh", level: "Native", width: "w-[100%]" },
                { name: "Russian", level: "Native", width: "w-[100%]" },
                { name: "Italian / German", level: "A1/A2", width: "w-[30%]" }
              ].map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-[11px] font-bold uppercase mb-1.5 tracking-tight">
                    <span>{lang.name}</span>
                    <span className="text-slate-400 italic">{lang.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-slate-900 ${lang.width}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em]">
          • Zhangir Yerkassym •
        </footer>
      </main>
    </div>
  );
}