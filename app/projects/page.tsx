import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "NIS Media League",
      emoji: "⚽️",
      date: "Mar 2023 - May 2025",
      description: [
        "Founded a school media football league with over 130 regular participants.",
        "Worked as social media manager and created over 200 posts on Instagram, Tik Tok and Telegram.",
        "Developed the league’s website and digital infrastructure.",
        "Established 6 media football regulations to standardize the league's operations."
      ],
      links: [
        { label: "Website", url: "https://nis-media-league.vercel.app/" },
        { label: "Instagram", url: "https://www.instagram.com/nis_media_league/" }
      ]
    },
    {
      title: "NIS Football Association",
      emoji: "🌱",
      date: "Aug 2023 - May 2025",
      subtitle: "Associated with Nazarbayev Intellectual Schools",
      description: [
        "Established 6 branches of the media football project in other NIS schools across the country.",
        "Conducted friendly matches and national tournaments between association members.",
        "Created high-impact media content and football-related analytical posts.",
        "Developed a comprehensive website for the NFA."
      ],
      links: [
        { label: "Website", url: "http://nfanisfootballassociation.tilda.ws/" },
        { label: "Instagram", url: "https://www.instagram.com/nis.football.association/" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-3xl mx-auto px-6 py-12 animate-fade-in">
        
        {/* Navigation */}
        <Link href="/" className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-8 block hover:opacity-70 transition-opacity">
          ← Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-5xl font-black tracking-tight mb-2 uppercase italic">Projects</h1>
          <p className="text-lg text-slate-500 italic">Initiatives in sports management and media ecosystem.</p>
        </header>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <section key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{project.emoji}</span>
                    <h2 className="text-2xl font-black uppercase italic tracking-tight">{project.title}</h2>
                  </div>
                  {project.subtitle && (
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{project.subtitle}</p>
                  )}
                </div>
                <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 self-start md:self-center">
                  {project.date}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {project.description.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-base text-slate-600 leading-snug">
                    <span className="text-blue-500 font-bold">/</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    <span className="text-[10px] opacity-60">↗</span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-20 text-center text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em]">
          • Zhangir Yerkassym •
        </footer>
      </main>
    </div>
  );
}