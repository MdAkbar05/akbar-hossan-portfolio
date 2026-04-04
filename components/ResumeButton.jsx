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
    >
      <div className="group flex flex-col items-center gap-1.5">
        <button
          title={isLeft ? "View Resume" : "Download Resume"}
          className="
            p-3 lg:p-3.5
            rounded-full
            cursor-pointer
            transition-all duration-300

            /* Light mode — green theme */
            bg-green-100
            text-green-600
            ring-1 ring-green-300
            shadow-[0_0_12px_rgba(0,180,80,0.2)]

            /* Dark mode — blue theme */
            dark:bg-slate-800
            dark:text-blue-400
            dark:ring-slate-700
            dark:shadow-none

            /* Hover — light */
            hover:bg-green-500
            hover:text-white
            hover:ring-green-400
            hover:shadow-[0_0_22px_rgba(0,200,80,0.55)]
            hover:scale-110

            /* Hover — dark */
            dark:hover:bg-blue-600
            dark:hover:text-white
            dark:hover:ring-blue-500
            dark:hover:shadow-[0_0_22px_rgba(59,130,246,0.55)]
          "
        >
          {isLeft ? <FaEye size={18} /> : <RiDownloadCloud2Line size={18} />}
        </button>

        {/* Label */}
        <span
          className="
          text-[10px] font-medium tracking-wide whitespace-nowrap select-none
          transition-colors duration-300

          text-green-500 dark:text-slate-500
          group-hover:text-green-600 dark:group-hover:text-blue-400
        "
        >
          {isLeft ? "View CV" : "Download CV"}
        </span>
      </div>
    </a>
  );
}

export default ResumeButton;
