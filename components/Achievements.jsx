"use client";
// Provider image import
import Diit from "@/public/assets/educations/diit_logo.png";
import ICT_Division from "@/public/assets/sponsor-img/DYD_LOGO.webp";
import EDGE from "@/public/assets/sponsor-img/EDGE_LOGO.webp";
import Ostad from "@/public/assets/sponsor-img/OSTAD_LOGO.webp";
// Certificate image import

import EDGE_Certi from "@/public/assets/achievements/Certificate-of-Video-Production-&-Editing-EDGE-CUET-MD-Akbar-Hossan.png";
import Diit_Certi from "@/public/assets/achievements/Certificate_of_Participation_Innovation_Pair_2023.webp";
import ICT_Certi from "@/public/assets/achievements/Database-Management-Certificate-English.png";
import Ostad_Certi from "@/public/assets/achievements/MD. Akbar Hossan-mernstack 7-C22353.png";

import Image from "next/image";
import { useState } from "react";

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null); // State to track the selected certificate

  const achievementData = [
    {
      id: 1,
      course: "Video Production & Editing",
      issuedBy: "Enhancing Digital Government and Economy (EDGE) under CUET",
      date: "06-Apr-2025",
      duration: "3 months",
      certificateId: "EDGE-DSTS-104-2694-00012",
      providerImage: EDGE,
      certificate: EDGE_Certi, // Add certificate image path
    },
    {
      id: 2,
      course: "Full Stack Web Development with JavaScript",
      issuedBy: "OSTAD Online Live Skills Development",
      date: "23-Feb-2025",
      duration: "6 months",
      certificateId: "C22353",
      providerImage: Ostad,
      certificate: Ostad_Certi, // Add certificate image path
    },
    {
      id: 3,
      course: "Database Management System",
      issuedBy: "DYD Ministry of Youth and Sports",
      date: "31-Dec-2024",
      duration: "2 months",
      certificateId: "240357",
      providerImage: ICT_Division,
      certificate: ICT_Certi, // Add certificate image path
    },
    {
      id: 4,
      course:
        "Certificate of Participation in DIIT Innovation Pair and Skill Competition",
      issuedBy: "Daffodil Institute of IT, Chattogram",
      date: "04-Sep-2023",
      duration: "3 Days",
      certificateId: "04092023",
      providerImage: Diit,
      certificate: Diit_Certi, // Add certificate image path
    },
  ];

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate); // Set the selected certificate to display in the modal
  };

  const closeCertificate = () => {
    setSelectedCertificate(null); // Close the modal
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {achievementData.map((edu) => (
          <div
            key={edu.id}
            className="bg-slate-200 dark:bg-extra p-6 rounded-lg shadow-lg outershadow transition-all duration-300 flex sm:flex-col md:flex-row items-center justify-between  border dark:border-secondary border-slate-300 "
          >
            {/* Education Details */}
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-medium   dark:text-quarterary text-primary mb-2 text-center">
                {edu.course}
              </h2>

              <p className="text-lg dark:text-mute text-secondary text-center font-medium">
                <span className=" ">
                  Issued By <br />
                </span>{" "}
                <span className=" gradient-text  font-semibold">
                  {edu.issuedBy}
                </span>{" "}
              </p>

              <p className="text-lg dark:text-mute text-secondary text-center font-medium">
                <span className=" ">Date of Issue:</span>{" "}
                <span className=" font-semibold">{edu.date}</span>{" "}
              </p>
              <p className="text-lg dark:text-mute text-secondary text-center font-medium">
                <span className=" ">Duration:</span>{" "}
                <span className=" ">{edu.duration}</span>{" "}
              </p>
            </div>
            {/* Education Board Image */}
            <div className="flex flex-col gap-4 items-center">
              <div className="w-40 h-24 flexCenter  bg-gray-200 p-3 rounded-md">
                <Image
                  src={edu.providerImage}
                  alt={`${edu.board} logo`}
                  width={200}
                  height={200}
                  className="object-cover filter  "
                />
              </div>
              <p className="text-sm text-secondary dark:text-mute text-center font-medium">
                <span className="text-primary">ID:</span> {edu.certificateId}
              </p>
              <div className="flex gap-3">
                <button
                  className="buttonReverse dark:bg-tartiary dark:text-quarterary hover:bg-green-500 hover:text-white text-primary cursor-pointer"
                  onClick={() => openCertificate(edu.certificate)}
                >
                  Certificate
                </button>
                <button className="button dark:bg-secondary dark:text-quarterary bg-slate-300 text-primary hover:bg-quarterary hover:text-primary cursor-pointer">
                  References
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Certificate */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={closeCertificate} // Close modal on backdrop click
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <Image
              src={selectedCertificate}
              alt="Certificate"
              width={800}
              height={600}
              className="rounded-lg object-contain"
            />
            <button
              className="mt-4 px-4 py-2 bg-primary text-quarterary rounded-md hover:bg-secondary transition-all"
              onClick={closeCertificate}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
