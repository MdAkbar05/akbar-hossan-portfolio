"use client";
import { FaEye } from "react-icons/fa";

function ResumeButton({ isLeft = false }) {
  return (
    <a
      href="/MD-Akbar-Hossan-React-and-Nextjs-Developer-chittagong-01879808105.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute bottom-6 ${isLeft ? "left-6" : "right-6"} z-50`}
    >
      <button
        title={`${isLeft ? "View Resume" : "Download Resume"}`}
        className="p-4
        rounded-full
        bg-green-700
        text-green-200
        font-semibold
        inset-ring-8 inset-ring-green-600
        ring-8 ring-green-400
        drop-shadow-[0_0px_10px_rgba(0,200,0)]
        hover:shadow-green-400/80
        hover:scale-105
        transition
        duration-300
        animate-pulse
        cursor-pointer
      "
      >
        {isLeft ? <FaEye size={24} /> : "CV"}
      </button>
    </a>
  );
}

export default ResumeButton;
