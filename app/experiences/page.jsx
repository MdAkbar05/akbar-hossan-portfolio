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
    <section className="container mx-auto pt-6 pb-12 px-4 normalFont dark:bg-primary bg-quarterary text-primary dark:text-quarterary space-y-10">
      {/* Title */}
      <div className="flex flex-col md:flex-row gap-2 w-full justify-center items-center text-xl md:text-3xl font-bold text-center py-2">
        <h1>My</h1>
        <h1 className="text-quarterary dark:text-primary dark:bg-quarterary bg-primary rounded-md p-1">
          Experience
        </h1>
      </div>

      {/* Experience list */}
      <div className="space-y-12">
        {experiences
          .slice()
          .reverse()
          .map((exp) => (
            <div
              key={exp.id}
              className="shadow-lg  border-2 dark:border-secondary border-slate-300 rounded-md bg-quarterary dark:bg-extra space-y-6"
            >
              {/* Company Info */}
              <div className="flex lg:flex-row flex-col-reverse items-center gap-4 justify-between border-r-4 border-green-600 p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xl font-semibold">
                    <span className="text-2xl">{exp.icon}</span>
                    {exp.company}
                  </div>

                  <p className="font-medium">{exp.role}</p>
                  <p className="text-sm opacity-70">{exp.duration}</p>
                  <p className="text-sm opacity-70">{exp.location}</p>

                  <p className="text-sm leading-relaxed">{exp.description}</p>
                </div>

                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={100}
                  height={100}
                  className="object-cover rounded-2xl drop-shadow-xl dark:drop-shadow-slate-800 drop-shadow-slate-200"
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
