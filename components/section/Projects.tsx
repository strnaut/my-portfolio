"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { projects } from "@/data/data";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">
            Featured <span className="text-primary-a20">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary-a20 rounded-full shadow-[0_0_10px_rgba(var(--primary-a20),0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-85 w-full overflow-hidden rounded-xl border border-primary-a10/10 bg-surface-a10"
            >
              {/* Gambar Project */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                className={` ${project.type === "web" ? "object-cover" : "object-contain"} transition-transform duration-700 scale-100 group-hover:scale-110`}
              />


              <div className="absolute bottom-6 left-6 max-w-sm z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <div className="px-5 py-2 rounded-xl bg-surface-a0/80 backdrop-blur-md border border-white/10 shadow-2xl">
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-linear-to-t from-surface-a0 via-surface-a0/90 to-transparent opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-primary-a20">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-sm text-whire leading-relaxed ">
                    {project.description}
                  </p>

                  {/* Placeholder Techstack - Bisa kamu sesuaikan di data.tsx nanti */}
                  <div className="flex flex-wrap">
                    <span className="text-[12px] font-mono text-primary-a30">
                      {project.techStack || "Tech Stack not specified"}
                    </span>
                  </div>

                  {/* Label Details */}
                  <div className="pt-4 flex items-center gap-2 text-white text-sm justify-end">
                    <span>Click to see details</span>
                    <Icon
                      icon="material-symbols:arrow-outward-rounded"
                      className="text-primary-a20 text-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Masking Halus di awal (opsional) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
