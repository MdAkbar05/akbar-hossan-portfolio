"use client";
import btebBoard from "@/public/assets/educations/bteb-board.png";
import comillaBoard from "@/public/assets/educations/comilla-board.png";
import JscCertificate from "@/public/assets/educations/JSC-Certificate-2017-MD-Akbar-Hossan.jpeg";
import PscCertificate from "@/public/assets/educations/PSC-Certificate.jpg";
import psc from "@/public/assets/educations/PSC.png";
import SscCertificate from "@/public/assets/educations/SSC-Certificate-2020-MD-Akbar-Hossan.jpeg";
import Image from "next/image";
import { useState } from "react";
export default function Pricing({ selectedService, onClose }) {
  // State to track the selected certificate

  return (
    <>
      {/* Modal for Certificate */}
      {selectedService && (
        <>
          <div
            className="fixed inset-0 bg-black/75 flex justify-center items-center z-50"
            onClick={() => onClose()} // Close modal on backdrop click
          >
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-extra bg-secondary text-quarterary p-6 rounded-2xl shadow-2xl max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <h2 className="text-2xl font-bold text-center  mb-2">
                {selectedService?.title} Pricing{" "}
                <span className="text-green-500">{selectedService?.price}</span>
              </h2>
              <p className="text-gray-400 text-center mb-4">
                {selectedService?.description}
              </p>

              <div className="border dark:border-secondary border-slate-300 rounded-xl p-4 dark:bg-extra bg-tartiary">
                <h3 className="text-xl font-semibold text-quarterary mb-2">
                  Features
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                  {selectedService?.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="mt-6 text-center flex justify-center items-center gap-4 ">
                  <span className="inline-block bg-green-700  text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-md transition-all duration-500 cursor-pointer">
                    Mail Plan
                  </span>
                  <span className="inline-block  bg-red-700   text-white px-4 py-2 rounded-lg text-lg transition-all duration-500 font-semibold shadow-md cursor-pointer">
                    Contacts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
