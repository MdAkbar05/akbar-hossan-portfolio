import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Button = ({ link, title, reverse }) => {
  if (reverse) {
    return (
      <Link
        href={link}
        title={title}
        className="relative normalFont inline-flex items-center justify-center   px-5 py-2 overflow-hidden font-semibold text-quarterary transition duration-300 ease-out myborder rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-quarterary bg-tartiary transition-all duration-300 transform group-hover:translate-x-full ease">
          {title ? title : <FaGithub size={24} />}
        </span>
        <span className="relative invisible">Visit</span>
      </Link>
    );
  } else {
    return (
      <Link
        href={link}
        target="_blank"
        className="relative normalFont inline-flex items-center justify-start  px-5 py-2  overflow-hidden font-semibold transition-all bg-tartiary myborder rounded-full hover:bg-white group"
      >
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-tartiary ">
          {title}
        </span>
      </Link>
    );
  }
};

export default Button;
