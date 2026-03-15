import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
        
        {/* 1. Убираем mb-12 у статуса полностью, ставим минимальный mb-4 */}
<div className="flex justify-between items-center mb-8">
  <div className="flex items-center gap-2 bg-white border border-slate-100 px-3 py-1 rounded-full shadow-sm">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Currently in Bologna, Italy</span>
  </div>
</div>

<header className="mb-6 flex flex-col gap-2">
  {/* 2. Имя: уменьшаем leading до предела и убираем mb */}
  <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-slate-900 leading-[0.8] mb-8">
    Zhangir Yerkassym
  </h1>

  {/* 3. Контент: меняем grid на flex для лучшего контроля плотности */}
  <div className="flex flex-col md:flex-row gap-6 items-center">
    
    {/* 4. Фото: делаем НЕ квадратным, а чуть приплюснутым, чтобы поднять контент ниже */}
    <div className="relative w-full h-[300px] md:w-[280px] md:h-[280px] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-100 shadow-sm">
      <img 
  src="me.png" 
  alt="Zhangir Yerkassym" 
  className="w-full h-full object-cover scale-[1.05] -translate-y-0 md:scale-110 md:-translate-y-[5%]"
/>
    </div>

    {/* Описание: убираем лишние межстрочные интервалы */}
    <div className="max-w-2xl">
      <p className="text-lg md:text-xl text-slate-500 leading-snug font-medium">
        1st year <span className="text-slate-900 font-bold underline decoration-blue-500/20 underline-offset-4">Economics and Finance</span> student at Università di Bologna. 
        Academic researcher and founder with a background in government analysis.
      </p>
    </div>
  </div>
</header>

{/* 4. Уменьшил отступ над кнопками, чтобы секция была компактной */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
  {/* твои кнопки без изменений */}
  <Link href="/publications" className="p-3 rounded-xl bg-slate-900 text-white text-center font-bold text-[11px] hover:bg-blue-600 transition-all uppercase tracking-tighter">
    Publications
  </Link>
  <Link href="/resume" className="p-3 rounded-xl bg-slate-900 text-white text-center font-bold text-[11px] hover:bg-blue-600 transition-all uppercase tracking-tighter">
    Resume
  </Link>
  <Link href="/projects" className="p-3 rounded-xl bg-slate-900 text-white text-center font-bold text-[11px] hover:bg-blue-600 transition-all uppercase tracking-tighter">
    Projects
  </Link>
  <Link href="/about" className="p-3 rounded-xl bg-slate-900 text-white text-center font-bold text-[11px] hover:bg-blue-600 transition-all uppercase tracking-tighter">
    About Me
  </Link>
</div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          <div className="md:col-span-2 p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col justify-between min-h-[220px] shadow-sm">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Current Focus</h2>
            <div>
              <p className="text-2xl font-bold mb-2 leading-tight uppercase italic text-balance">Economics & Finance</p>
              <p className="text-slate-500 text-sm italic">Specializing in market analysis, global trends, and financial technology at the world's oldest university.</p>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-blue-50 border border-blue-100 flex flex-col justify-between text-blue-900">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">University Role</h2>
            <p className="text-xl font-black leading-tight uppercase italic">Student Ambassador</p>
            <p className="text-[10px] font-bold uppercase opacity-60 italic">Alma Mater Studiorum</p>
          </div>

          <div className="p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col justify-between min-h-[200px]">
            <div className="text-3xl italic font-black text-slate-200">01.</div>
            <div>
              <h3 className="font-bold text-lg leading-tight uppercase">Science</h3>
              <p className="text-xs text-slate-500 mt-1 italic">
                1st Place National Astronomy Competition & 3rd Place at IX Republican Youth Research Conference "Al-Farabi".
              </p>
            </div>
          </div>

          <div className="md:col-span-2 p-8 rounded-[2rem] bg-slate-50 border border-slate-200 flex flex-col justify-between group">
             <div className="flex justify-between items-start">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 italic font-mono">Leadership</span>
               <span className="text-xs text-slate-400 uppercase font-mono">Founder</span>
             </div>
             <div>
                <p className="text-xl font-bold leading-tight uppercase">NIS Football Association & Media League</p>
                <p className="text-sm text-slate-500 mt-1 italic">
                  Established 6 regional branches, managed 130+ participants and developed the league's digital ecosystem.
                </p>
             </div>
          </div>
        </div>
        
        <div className="md:col-span-1 p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col relative min-h-[220px]">
  <div className="relative z-10">
    <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-white-400 mb-6">
      Expertise & Skills
    </h2>
    <div className="flex flex-wrap gap-3">
      {[
        'Econometrics',
        'Data analysis',
        'Political research',
        'Institutional Design',
        'Public Speaking',
        'SMM & Canva',
        'Strategic Mgmt'
      ].map((skill) => (
        <span 
          key={skill} 
          className="text-[13px] px-4 py-2 border border-slate-700 rounded-xl font-bold uppercase tracking-tight hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-default shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>
        {/* Footer */}
        <footer className="mt-15 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 font-bold">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Zhangir Yerkassym
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-widest italic font-black">
            <a href="https://linkedin.com/in/zhangir-yerkassym-b48aab375/" target="_blank" className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600">LinkedIn</a>
            <a href="https://www.instagram.com/jonyyv.erk/" target="_blank" className="hover:text-pink-500 transition-colors border-b-2 border-transparent hover:border-pink-500">Instagram</a>
            <a href="https://t.me/Jonyyverk" target="_blank" className="hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-400">Telegram</a>
            <a href="mailto:zhangirerkasym@gmail.com" className="hover:text-slate-900 transition-colors border-b-2 border-transparent hover:border-slate-900">Email</a>
          </div>
        </footer>

      </main>
    </div>
  );
}