"use client";

import { Icon } from "@iconify/react";
import { Skill_tools } from "@/data/data";

function Skills() {
  const categories = [
    {
      title: "Frontend & Languages",
      skills: Skill_tools.filter((s) =>
        [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind",
          "Python",
          "C++",
        ].includes(s.name),
      ),
    },
    {
      title: "Backend & Database",
      skills: Skill_tools.filter((s) =>
        ["Laravel", "CodeIgniter 4", "MySQL", "PostgreSQL"].includes(s.name),
      ),
    },
    {
      title: "Tools & Design",
      skills: Skill_tools.filter((s) =>
        [
          "Git",
          "Figma",
          "Draw.io",
          "VSCode",
          "Looker Studio",
          "Google AppSheet",
        ].includes(s.name),
      ),
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          {/* RESPONSIVE TEXT: Ukuran teks h2 mengecil sedikit di mobile */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Skills & <span className="text-primary-a20">Tools</span>
          </h2>
          <div className="h-1 w-20 bg-primary-a20 rounded-full shadow-[0_0_10px_rgba(var(--primary-a20),0.5)]"></div>
        </div>

        {/* GRID UTAMA: 1 Kolom di mobile, 2 Kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`space-y-6 ${idx === 0 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] text-white font-bold px-2 border-l-2 md:border-l-3 border-primary-a20">
                {cat.title}
              </h3>

              {/* GRID ICON RESPONSIF:
                  - Di mobile semuanya pakai grid-cols-3 agar jumlah item (9, 4, 6) terbagi rata dan pas di lebar layar HP.
                  - Di desktop (md): Frontend (idx 0) jadi 6 kolom, sisanya (idx 1 & 2) jadi 3 kolom.
                  - Padding p-4 di mobile agar box tidak terlalu memakan tempat, p-6 di desktop.
              */}
              <div
                className={`grid gap-3 md:gap-4 grid-cols-3 ${
                  idx === 0 ? "md:grid-cols-6" : "md:grid-cols-3"
                }`}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-surface-a10/80 border border-white/5 hover:border-primary-a20/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-primary-a20/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

                    {/* Ukuran icon mengecil dikit di mobile (text-3xl) biar gak kesempitan */}
                    <Icon
                      icon={skill.icon}
                      className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-all duration-300"
                    />

                    {/* Teks nama skill mengecil (text-[10px]) di mobile agar tidak terpotong atau merusak kotak */}
                    <span className="text-[10px] md:text-xs font-medium text-surface-a50 group-hover:text-white transition-colors text-center line-clamp-1 md:line-clamp-none">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;