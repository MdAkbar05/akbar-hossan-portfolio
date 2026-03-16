"use client";
import { FaEye } from "react-icons/fa";

function ResumeButton({ isLeft = false }) {
  return (
    <a
      href="/MD-Akbar-Hossan-React-and-Nextjs-Developer-chittagong-01879808105.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute  ${isLeft ? "left-6" : "right-6"} sm:top-1/3 z-50`}
    >
      <button
        title={`${isLeft ? "View Resume" : "Download Resume"}`}
        className="p-4
        rounded-full
        bg-blue-700
        text-blue-200
        font-semibold
        inset-ring-8 inset-ring-blue-600
        ring-8 ring-blue-500
        drop-shadow-[0_0px_10px_rgba(0,0,255)]
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
