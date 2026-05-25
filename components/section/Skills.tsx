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
        ["Laravel",
          "CodeIgniter 4", 
          "MySQL", 
          "PostgreSQL"
        ].includes(s.name),
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

  // ... (bagian import dan variabel categories tetap sama)

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">
            Skills & <span className="text-primary-a20">Tools</span>
          </h2>
          <div className="h-1 w-20 bg-primary-a20 rounded-full shadow-[0_0_10px_rgba(var(--primary-a20),0.5)]"></div>
        </div>

        {/* GRID UTAMA: 
            Di desktop pakai 2 kolom (md:grid-cols-2).
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              /* LOGIKA SPAN: 
                 Jika index adalah 0 (Frontend), pakai col-span-2 agar lebar penuh.
              */
              className={`space-y-6 ${idx === 0 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              <h3 className="text-sm uppercase tracking-[0.3em] text-white font-bold px-2 border-l-3 border-primary-a20">
                {cat.title}
              </h3>

              {/* GRID ICON:
                  Untuk Frontend (idx 0) kita buat kolomnya lebih banyak (6) agar tidak terlalu besar-besar box-nya.
                  Untuk yang lain (idx 1 & 2) kita buat 3 kolom agar pas di setengah layar.
              */}
              <div
                className={`grid gap-4 grid-cols-2 ${idx === 0 ? "md:grid-cols-6" : "md:grid-cols-3"} `}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-a10/80 border border-white/5 hover:border-primary-a20/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-primary-a20/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

                    <Icon
                      icon={skill.icon}
                      className="text-4xl mb-3 group-hover:scale-110 transition-all duration-300"
                    />

                    <span className="text-xs font-medium text-surface-a50 group-hover:text-white transition-colors">
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
