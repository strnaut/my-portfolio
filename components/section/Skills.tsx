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
    <section
      id="skills"
      className="py-24 relative overflow-hidden px-4 sm:px-6"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Skills & <span className="text-primary-a20">Tools</span>
          </h2>
          <div className="h-1 w-20 bg-primary-a20 rounded-full shadow-[0_0_10px_rgba(var(--primary-a20),0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`space-y-6 ${idx === 0 ? "lg:col-span-2" : "lg:col-span-1"}`}
            >
              <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] text-white font-bold px-2 border-l-2 lg:border-l-3 border-primary-a20">
                {cat.title}
              </h3>
              
              <div
                className={`grid gap-3 md:gap-4 grid-cols-3 md:grid-cols-4 ${
                  idx === 0 ? "lg:grid-cols-6" : "lg:grid-cols-3"
                }`}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center p-4 md:p-5 lg:p-6 rounded-2xl bg-surface-a10/80 border border-white/5 hover:border-primary-a20/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <Icon
                      icon={skill.icon}
                      className="text-3xl lg:text-4xl mb-2 lg:mb-3 group-hover:scale-110 transition-all duration-300"
                    />
                    <span className="text-[10px] md:text-xs font-medium text-surface-a50 group-hover:text-white transition-colors text-center line-clamp-1">
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
