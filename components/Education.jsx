"use client";
import btebBoard from "@/public/assets/educations/bteb-board.png";
import comillaBoard from "@/public/assets/educations/comilla-board.png";
import JscCertificate from "@/public/assets/educations/JSC-Certificate-2017-MD-Akbar-Hossan.jpeg";
import PscCertificate from "@/public/assets/educations/PSC-Certificate.jpg";
import psc from "@/public/assets/educations/PSC.png";
import SscCertificate from "@/public/assets/educations/SSC-Certificate-2020-MD-Akbar-Hossan.jpeg";
import Image from "next/image";
import { useState } from "react";

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState(null); // State to track the selected certificate

  const educationData = [
    {
      id: 1,
      degree: "Diploma in Computer Science & Technology (CST)",
      institution: "Daffodil Institute of IT",
      board: "Bangladesh Technical Education Board (BTEB)",
      year: "2024",
      gpa: "3.79 / 4.00",
      image: btebBoard,
      certificate: null, // Add certificate image path
    },
    {
      id: 2,
      degree: "Secondary School Certificate (SSC)",
      institution: "Ashirpar High School",
      board: "Comilla Education Board",
      year: "2020",
      gpa: "3.83 / 5.00",
      image: comillaBoard,
      certificate: SscCertificate, // Add certificate image path
    },
    {
      id: 3,
      degree: "Junior School Certificate (JSC)",
      institution: "Ashirpar High School",
      board: "Comilla Education Board",
      year: "2017",
      gpa: "3.14 / 5.00",
      image: comillaBoard,
      certificate: JscCertificate, // Add certificate image path
    },
    {
      id: 4,
      degree: "Primary School Certificate (PSC)",
      institution: "Ideal Kinder Garten",
      board: "Comilla Education Board",
      year: "2014",
      gpa: "4.75 / 5.00",
      image: psc,
      certificate: PscCertificate, // Add certificate image path
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
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="dark:bg-extra bg-slate-200 p-6 rounded-lg shadow-lg outershadow transition-all duration-300 flex sm:flex-col md:flex-row items-center justify-between border dark:border-secondary border-slate-300 "
          >
            {/* Education Details */}
            <div className="text-primary dark:text-slate-300">
              <h2 className="text-2xl font-semibold dark:text-quarterary text-secondary mb-2 text-center">
                {edu.degree}
              </h2>
              <p className="text-lg  mb-1 text-center ">
                <span className="  ">Institution:</span> {edu.institution}
              </p>
              <p className="text-lg  mb-1 text-center">
                Passing Year:
                <span className=""> {edu.year}</span>
              </p>
              <p className="text-lg  text-center">
                <span className="">GPA:</span> {edu.gpa}
              </p>
            </div>
            {/* Education Board Image */}
            <div className="flex flex-col gap-4 items-center">
              <div className="w-24 h-24 flexCenter">
                <Image
                  src={edu.image}
                  alt={`${edu.board} logo`}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <h4 className="text-center">{edu.board}</h4>
              <div className="flex gap-3">
                <button
                  className="buttonReverse dark:bg-tartiary dark:text-quarterary hover:bg-green-500 hover:text-white text-primary cursor-pointer"
                  onClick={() => openCertificate(edu.certificate)}
                >
                  Certificate
                </button>
                <button className="button dark:bg-secondary dark:text-quarterary bg-slate-300 text-primary hover:bg-quarterary hover:text-primary cursor-pointer ">
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
          className="fixed inset-0 bg-black/75 flex justify-center items-center z-50"
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
