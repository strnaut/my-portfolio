"use client";

import { experiences } from "@/data/data";

function Experiences() {
  return (
    <section
      id="experiences"
      className="py-24 flex flex-col items-center relative overflow-hidden px-4 sm:px-6"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Professional <span className="text-primary-a20">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-primary-a20 rounded-full shadow-[0_0_10px_rgba(var(--primary-a20),0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-6 rounded-2xl bg-surface-a10 border border-white/5 hover:border-primary-a20 transition-all duration-500 overflow-hidden h-full"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-a20/10 blur-3xl group-hover:bg-primary-a20/20 transition-all" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 leading-snug">
                      {exp.position}
                    </h3>
                    <p className="text-primary-a30 text-sm font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[11px] lg:text-[12px] font-mono tracking-tighter text-white bg-surface-a20 px-3 py-1 rounded-full border border-white/5 self-start shrink-0">
                    {exp.date}
                  </span>
                </div>

                <ul className="text-sm text-white/80 leading-relaxed text-justify list-disc pl-5 space-y-2 mb-6">
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary-a20">
                    {exp.type}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-a20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
