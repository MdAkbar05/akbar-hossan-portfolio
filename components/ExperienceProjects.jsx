"use client";

import { useState } from "react";
import Image from "next/image";

function ExperienceProjects({ projects }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full space-y-4 p-6 pt-0 md:p-8 md:pt-0">
      {/* Toggle Button */}
      <div className="flex justify-start">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-emerald-500 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-white/15 dark:text-quarterary dark:hover:border-blue-400 dark:hover:text-blue-400"
        >
          {open ? "Show Less" : "Show Projects"}
        </button>
      </div>

      {/* Animated Container */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "max-h-full opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="grid grid-cols-1 gap-4 pt-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-secondary"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 p-4">
                <h4 className="font-semibold tracking-tight">
                  {project.title}
                </h4>

                <ul className="ml-4 list-disc space-y-1 text-xs text-slate-500 dark:text-slate-300">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceProjects;
