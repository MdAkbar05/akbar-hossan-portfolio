"use client";
import { FaEye } from "react-icons/fa";
import { RiDownloadCloud2Line } from "react-icons/ri";
function ResumeButton({ isLeft = false }) {
  return (
    <a
      href="/MD-Akbar-Hossan-React-and-Nextjs-Developer-chittagong-01879808105.pdf"
      download={isLeft ? false : true}
      target="_blank"
      rel="noopener noreferrer"
      className={`absolute  ${isLeft ? "left-6" : "right-6"} sm:top-2/5 z-10`}
    >
      <button
        title={`${isLeft ? "View Resume" : "Download Resume"}`}
        className="lg:p-4 p-3
        rounded-full
        bg-blue-700
        text-blue-200
        font-semibold
        lg:inset-ring-8 inset-ring-4 inset-ring-blue-600
        lg:ring-8 ring-4 ring-blue-500
        drop-shadow-[0_0px_10px_rgba(0,0,255)]
        hover:shadow-green-400/80
        hover:scale-105
        transition
        duration-300
        animate-pulse
        cursor-pointer
        lg:text-base 
      "
      >
        {isLeft ? <FaEye size={24} /> : <RiDownloadCloud2Line size={24} />}
      </button>
    </a>
  );
}

export default ResumeButton;
