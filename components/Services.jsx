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
      icon: <FaCode size={40} className="text-quarterary" />,
      title: "Frontend Development",
      description:
        "Building responsive and modern websites using the latest technologies like React, Next.js, and Tailwind CSS.",
      img: website,
      features: [
        "Responsive Web Design",
        "Single Page Application (SPA)",
        "SEO-Friendly Markup",
        "Cross-Browser Compatibility",
        "Optimized Performance",
      ],
      price: "$300 - $800",
    },
    {
      id: 2,
      icon: <FaDatabase size={40} className="text-quarterary" />,
      title: "Backend Development",
      description:
        "Developing scalable and secure backend systems using Node.js, Express, and MongoDB.",
      img: website,
      features: [
        "RESTful API Development",
        "Database Architecture (MongoDB)",
        "Authentication & Authorization",
        "CRUD Operations",
        "Server Deployment",
      ],
      price: "$400 - $900",
    },
    {
      id: 3,
      icon: <FaMobileAlt size={40} className="text-quarterary" />,
      title: "Full Stack Development",
      description:
        "Creating cross-platform mobile applications with a focus on performance and user experience.",
      img: website,
      features: [
        "Frontend & Backend Integration",
        "Admin Panel & Dashboard",
        "Authentication System",
        "Cloud Deployment (Vercel, Render)",
        "Maintenance & Support",
      ],
      price: "$700 - $1500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="dark:bg-extra bg-quarterary p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center text-center border dark:border-secondary border-slate-300"
        >
          <div className="flex items-center justify-center mb-4 gap-2">
            <div className=" w-[50%] flex flex-col justify-center items-center p-4">
              {/* <div className="mb-4">{service.icon}</div> */}
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-lg md:text-2xl font-semibold mb-2 gradient-text">
                {service.title}
              </h2>
            </div>
            <div className="w-[50%]  ">
              <Image
                src={service.img}
                alt={service.title}
                width={200}
                height={200}
                className="object-cover myborder rounded-lg shadow-lg outershadow2 transition-all duration-300"
              />
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {service.description}
          </p>
          <div className="mt-4 space-x-4">
            <button
              className="buttonReverse dark:bg-tartiary dark:text-quarterary hover:bg-green-500 hover:text-white text-primary cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              See Pricing
            </button>
          </div>
        </div>
      ))}
      {selectedService && (
        <Pricing selectedService={selectedService} onClose={closeService} />
      )}
    </div>
  );
}
