"use client";

import { useState } from "react";
import Image from "next/image";

function ExperienceProjects({ projects }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full p-4 space-y-4">
      {/* Toggle Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setOpen(!open)}
          className="px-5 py-2 rounded-md bg-primary text-quarterary dark:bg-quarterary dark:text-primary font-medium transition hover:scale-105 cursor-pointer"
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="dark:bg-secondary bg-quarterary rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-center"
                />
              </div>

              <div className="p-4 space-y-2">
                <h4 className="font-semibold">{project.title}</h4>

                <ul className="text-xs space-y-1 list-disc ml-4">
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
