"use client";
import website from "@/public/assets/services-img/website-dev.png";
import Image from "next/image";
import { useState } from "react";
import Pricing from "./Pricing";
import { FaCode, FaDatabase, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const closeService = () => {
    setSelectedService(null); // Close the modal
  };
  const services = [
    {
      id: 1,
      icon: <FaCode size={22} />,
      title: "Frontend Development",
      description:
        "Building responsive and modern websites using the latest technologies like React, Next.js, and Tailwind CSS.",
      img: website,
      features: [
        "Responsive Web Design",
        "Single Page Application (SPA) (Contact for Multiple Pages)",
        "SEO-Friendly Markup",
        "Cross-Browser Compatibility",
        "Optimized Performance",
      ],
      price: "2500-base on requirements (BDT)",
    },
    {
      id: 2,
      icon: <FaDatabase size={22} />,
      title: "Backend Development",
      description:
        "Developing scalable and secure backend systems using Node.js, Express, and MongoDB.",
      img: website,
      features: [
        "RESTful API Development",
        "Database Architecture (MongoDB / POSTGRESQL)",
        "Authentication & Authorization",
        "CRUD Operations",
        "Server Deployment",
      ],
      price: "4000-base on requirements (BDT)",
    },
    {
      id: 3,
      icon: <FaMobileAlt size={22} />,
      title: "Full Stack Development",
      description:
        "Creating cross-platform mobile applications with a focus on performance and user experience.",
      img: website,
      features: [
        "Frontend & Backend Integration",
        "Admin Panel & Dashboard",
        "Authentication System",
        "Cloud Deployment (Vercel, Render) (Also provide own hosting)",
        "Maintenance & Support",
      ],
      price: "8000-base on requirements (BDT)",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.id}
          className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-white/10 dark:bg-extra"
        >
          <div className="relative h-40 overflow-hidden">
            <Image
              src={service.img}
              alt=""
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-extra/80 via-extra/10 to-transparent" />
            <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-lg dark:bg-blue-500">
              {service.icon}
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-gray-300">
              {service.description}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {service.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-blue-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <button
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:text-quarterary dark:hover:border-blue-400 dark:hover:text-blue-400"
                onClick={() => setSelectedService(service)}
              >
                View pricing
              </button>
            </div>
          </div>
        </div>
      ))}
      {selectedService && (
        <Pricing selectedService={selectedService} onClose={closeService} />
      )}
    </div>
  );
}
