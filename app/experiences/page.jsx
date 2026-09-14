import Image from "next/image";
import { FaBriefcase, FaCode } from "react-icons/fa";
import ExperienceProjects from "@/components/ExperienceProjects";

import deshIT from "../../public/assets/experiences/deshIT.png";
import daffodil from "../../public/assets/experiences/daffodil-computers.jpg";

export const metadata = {
  title: "My Experience",
  description: "Professional experience and company projects",
};

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Daffodil Computers Ltd.",
    logo: daffodil,
    duration: "July 2024 – September 2024",
    location: "SK Road, Agrabad, Chittagong, Bangladesh",
    description:
      "Developed modern responsive web applications using React, Next.js and Tailwind. Built scalable UI systems and integrated APIs.",
    icon: <FaCode />,
    projects: [
      {
        title: "Agency Digital Site",
        image: "/assets/experiences/agency-digital.png",
        features: [
          "Graphics design",
          "UI/UX design",
          "Frontend development",
          "Backend development",
        ],
      },
      {
        title: "Sagor Departmental Store",
        image: "/assets/experiences/sagor-dept.png",
        features: [
          "Customer Order System",
          "Order Management",
          "Favorites Listing",
          "Inventory Management",
          "Admin Dashboard",
        ],
      },
    ],
  },
  {
    id: 2,
    role: "Junior Web Developer",
    company: "DeshIT BD",
    logo: deshIT,
    duration: "December 2025 - present",
    location: "House D/36, Block E, Lalmatia, Dhaka-1207, Bangladesh",
    description:
      "Built full stack applications using React, Next.js, MongoDB, Express and Node.js with authentication, dashboards and APIs.",
    icon: <FaBriefcase />,
    projects: [
      {
        title: "Turf Booking Platform",
        image: "/assets/experiences/turf-grounds.png",
        features: [
          "Online slot booking system",
          "Stripe payment integration",
          "Owner dashboard",
          "Event joining system",
        ],
      },
      {
        title: "Restaurant Digital Menu",
        image: "/assets/experiences/digital-home.png",
        features: [
          "QR code menu access",
          "POS integration",
          "Order management",
          "Admin dashboard",
        ],
      },
      {
        title: "Salis ERP System",
        image: "/assets/experiences/erp-home.png",
        features: [
          "All kind of Services",
          "Order management",
          "Problem Solution",
        ],
      },
    ],
  },
];

function ExperiencePage() {
  return (
    <section className="container mx-auto space-y-12 px-4 pb-16 pt-10 normalFont text-primary dark:text-quarterary md:pt-16">
      <header className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-blue-400">
          Career journey
        </p>
        <h1 className="titleFont text-3xl font-bold tracking-tight md:text-5xl">
          Experience that ships
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          A selection of roles where I have turned product ideas into reliable,
          user-focused web experiences.
        </p>
      </header>

      {/* Experience list */}
      <div className="mx-auto  space-y-8">
        {experiences
          .slice()
          .reverse()
          .map((exp) => (
            <div
              key={exp.id}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-extra dark:hover:shadow-black/20"
            >
              {/* Company Info */}
              <div className="grid gap-8 border-b border-slate-200/80 p-6 dark:border-white/10 md:grid-cols-[1fr_auto] md:items-start md:p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-blue-500/10 dark:text-blue-400">
                      {exp.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {exp.duration}
                      </p>
                      <h2 className="mt-1 text-xl font-bold tracking-tight md:text-2xl">
                        {exp.company}
                      </h2>
                    </div>
                  </div>

                  <p className="font-semibold text-emerald-600 dark:text-blue-400">
                    {exp.role}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {exp.location}
                  </p>

                  <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>
                </div>

                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={100}
                  height={100}
                  className="h-20 w-20 rounded-xl border border-slate-200 object-cover p-1 shadow-sm dark:border-white/10"
                />
              </div>

              {/* Project Gallery */}
              <ExperienceProjects projects={exp.projects} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default ExperiencePage;
