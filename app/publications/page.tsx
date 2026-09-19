'use client';

import { useState } from 'react';
import Link from 'next/link';

interface PublishedWork {
  title: string;
  source: string;
  date: string;
  link: string;
  description: string;
}

interface IndependentResearch {
  title: string;
  type: string;
  link: string;
  description: string;
}

export default function Publications() {
  const published: PublishedWork[] = [
    {
      title: "FOOD PRODUCTS IN KAZAKHSTAN: CAUSES AND SOLUTIONS",
      source: "Central Asian Scientific Journal",
      date: "Sep 2024",
      link: "https://cajournal.kz/vol/2024/vol4(23).pdf",
      description: "A multi-methodological study analyzing the escalation of food costs in Almaty (2022–2024). Based on field interviews with agricultural officials, farm owners, and business leaders to identify structural gaps in supply chains and the impact of regional geopolitical instability."
    },
    {
      title: "PRICE RISE: A THREAT OR A CHANCE?",
      source: "Ogni Alatau newspaper",
      date: "Sep 2024",
      link: "https://ognialatau.kz/news/cat-1/30382/",
      description: "A comprehensive analysis of inflation trends and their impact on regional economies in Kazakhstan. Focused on socio-economic challenges and potential policy interventions to mitigate rising living costs."
    }
  ];

  const independent: IndependentResearch[] = [
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

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const buildCitation = (pub: PublishedWork): string => {
    // APA-style: Author. (Year). Title. Source. URL.
    const yearMatch = pub.date.match(/\d{4}/);
    const year = yearMatch ? yearMatch[0] : pub.date;
    const titleCase = pub.title
      .toLowerCase()
      .replace(/(^\w|[:.]\s*\w)/g, (c: string) => c.toUpperCase());
    return `Yerkassym, Z. (${year}). ${titleCase}. ${pub.source}. ${pub.link}`;
  };

  const handleCopy = async (pub: PublishedWork, index: number) => {
    const citation = buildCitation(pub);
    try {
      await navigator.clipboard.writeText(citation);
    } catch (err) {
      // Fallback for environments without clipboard permission
      const textarea = document.createElement('textarea');
      textarea.value = citation;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex((current) => (current === index ? null : current)), 1800);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-blue-100">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

        {/* Navigation */}
        <Link href="/" className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-10 sm:mb-12 block hover:opacity-70 transition-opacity">
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-5xl font-black mb-10 sm:mb-16 italic tracking-tight uppercase leading-tight">
          Research & Publications
        </h1>

        {/* Section 1: Published Works */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-[13px] sm:text-[14px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6 sm:mb-8 flex items-center gap-3">
            Academic & Media <span className="h-[1px] w-12 bg-blue-600"></span>
          </h2>
          <div className="flex flex-col gap-6 sm:gap-8">
            {published.map((pub, i) => (
              <div
                key={i}
                className="p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all relative overflow-hidden"
              >
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                  <span className="text-[10px] font-black px-3 py-1 bg-slate-900 text-white rounded-lg uppercase tracking-widest">
                    {pub.source}
                  </span>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{pub.date}</span>
                </div>

                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="group block">
                  <h3 className="text-xl sm:text-2xl font-black leading-tight mb-4 group-hover:text-blue-600 uppercase italic transition-colors">
                    {pub.title}
                  </h3>
                </a>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">{pub.description}</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-blue-600 hover:opacity-70 transition-opacity"
                  >
                    Read the piece ↗
                  </a>
                  <button
                    onClick={() => handleCopy(pub, i)}
                    className="text-sm font-bold px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors self-start"
                  >
                    {copiedIndex === i ? 'Citation copied' : 'Copy citation'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Independent Research */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-[13px] sm:text-[14px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6 sm:mb-8 flex items-center gap-3">
            Independent Research <span className="h-[1px] w-12 bg-blue-600"></span>
          </h2>
          <div className="flex flex-col gap-6 sm:gap-8">
            {independent.map((res, i) => (
              <div
                key={i}
                className="p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all relative overflow-hidden"
              >
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                  <span className="text-[10px] font-black px-3 py-1 bg-slate-900 text-white rounded-lg uppercase tracking-widest">{res.type}</span>
                </div>

                <a href={res.link} target="_blank" rel="noopener noreferrer" className="group block">
                  <h3 className="text-xl sm:text-2xl font-black leading-tight mb-4 group-hover:text-blue-600 uppercase italic transition-colors text-left">
                    {res.title}
                  </h3>
                </a>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed text-left max-w-2xl mb-6">{res.description}</p>

                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-blue-600 hover:opacity-70 transition-opacity"
                >
                  Read the piece ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-slate-100 text-center">
          <p className="text-[9px] sm:text-[10px] font-mono text-slate-300 uppercase tracking-[0.3em] sm:tracking-[0.5em]">
            Zhangir Yerkassym • Research Portfolio
          </p>
        </footer>

      </main>
    </div>
  );
}