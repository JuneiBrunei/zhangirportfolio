import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-3xl mx-auto px-6 py-12 animate-fade-in">
        
        {/* Navigation */}
        <Link href="/" className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-12 block hover:opacity-70 transition-opacity">
          ← Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-6xl font-black tracking-tighter mb-4 uppercase italic">Beyond the CV</h1>
          <p className="text-xl text-slate-500 italic">Student by day, visionary by night, and a bit of everything in between.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Football Section */}
          <div className="p-8 rounded-[2.5rem] bg-sky-50 border border-sky-100 flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl">⚽️</span>
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Die-hard Fan</span>
            </div>
            <div>
              <h2 className="text-2xl font-black text-sky-900 uppercase italic leading-tight mb-2">Manchester City</h2>
              <p className="text-sm text-sky-700 leading-relaxed">
                Watching Pep’s masterclasses isn't just a hobby; it’s a lifestyle. Blue moon rising, always.
              </p>
            </div>
          </div>

          {/* UFC Section */}
          <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl">🥊</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Octagon Junkie</span>
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase italic leading-tight mb-3 text-red-500">UFC Spirit</h2>
              <div className="space-y-2">
                <p className="text-sm border-l-2 border-yellow-500 pl-3">
                  <span className="font-bold text-yellow-500 underline decoration-2">Charles Oliveira:</span> The champion has a name. Brazil’s finest.
                </p>
                <p className="text-sm border-l-2 border-pink-500 pl-3">
                  <span className="font-bold text-pink-500 underline decoration-2">Sean O'Malley:</span> "Suga" show entertains like no other. 
                </p>
              </div>
            </div>
          </div>

          {/* Cooking Section */}
          <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-orange-50 border border-orange-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="text-6xl">👨‍🍳</div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-black text-orange-900 uppercase italic">Gourmet Secret</h2>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Private Channel</span>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Cooking is my meditation. I run a private culinary Telegram channel where I document my experiments with flavors. From pasta in Bologna to anything that tastes like home.
              </p>
            </div>
          </div>

          {/* PUBG Section */}
          <div className="p-8 rounded-[2.5rem] bg-zinc-100 border border-zinc-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl">📱</span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Squad Up</span>
              </div>
              <h2 className="text-xl font-black text-zinc-800 uppercase italic mb-3">PUBG Mobile</h2>
              <p className="text-sm text-zinc-500 mb-4">The ultimate stress relief with friends.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-zinc-800 text-white text-[10px] font-bold rounded-lg tracking-widest">UMP45</span>
              <span className="px-3 py-1 bg-zinc-800 text-white text-[10px] font-bold rounded-lg tracking-widest">SKS</span>
            </div>
          </div>

          {/* Dream Section */}
          <div className="p-8 rounded-[2.5rem] bg-blue-600 text-white flex flex-col justify-between shadow-xl shadow-blue-100">
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl">🏛️</span>
              <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Final Goal</span>
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase italic leading-tight mb-2">Future Deputy</h2>
              <p className="text-sm text-blue-100 leading-relaxed italic">
                Beyond economics and sports, there's a drive for public service. My ultimate dream is to represent people and make an impact in the Parliament.
              </p>
            </div>
          </div>

        </div>

        <footer className="mt-20 text-center text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em]">
          • Character Unlocked •
        </footer>
      </main>
    </div>
  );
}