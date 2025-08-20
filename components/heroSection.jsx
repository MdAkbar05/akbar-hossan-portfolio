import SocialMediaLinks from "./social-media-links";
import Sponsor from "./Sponsor";
import Image from "next/image";
import Profile from "@/public/assets/img/akbar-hossan-transparent-image3.webp";
import Link from "next/link";
import { getNextJsExperianceTime } from "@/lib/utils";

export default function HeroSection() {
  let nextJsExperianceTime = getNextJsExperianceTime("2025-02-18");
  let reactJsExperianceTime = getNextJsExperianceTime("2023-10-05");
  return (
    <>
      <div className="text-slate-600 flex sm:flex-col md:flex-row items-center justify-center gap-12 w-full">
        <div className="relative sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-slate-600 ">
          <Image
            src={Profile}
            alt="MD. AKbar Hossan Full Stack Developer Portfolio"
            fill
            sizes="100%"
            className="object-cover"
            placeholder="blur"
            priority
          />
        </div>
        <div className="flex flex-col justify-center gap-4 m-0 px-10">
          <div className="space-y-1">
            <h1 className=" sm:text-3xl md:text-5xl  titleFont font-semibold text-primary dark:text-quarterary ">
              MD. Akbar Hossan
            </h1>
            <h2 className="dark:bright-text  sm:text-sm md:text-lg normalFont gradient-text dark:text-quarterary">
              a React JS and Next Js Developer
            </h2>
          </div>
          <p className="sm:text-lg md:text-2xl nameFont text-primary dark:text-quarterary">
            I've been working as a React JS developer for{" "}
            {reactJsExperianceTime} <br /> and Next JS developer for{" "}
            {nextJsExperianceTime}.
          </p>
          <div className="space-x-4 py-2">
            <Link
              href={"/contacts"}
              className="titleFont hover:bg-green-500 hover:text-white cursor-pointer transition-all duration-300  bg-extra dark:bg-quarterary dark:text-primary py-1 px-4 text-white rounded-md w-fit shadow-[0_0_50px_rgb(30,259,200)]
    dark:shadow-[0_0_50px_rgb(36,19,131)]
  sm:text-sm md:text-balance"
            >
              HIRE ME
            </Link>
            <Link
              href={"mailto:akbar.hossan.official@gmail.com"}
              className="titleFont myborder text-primary cursor-pointer transition-all duration-300  hover:bg-extra  dark:text-white dark:bg-primary hover:text-white py-1 px-4  rounded-md w-fit sm:text-sm md:text-balance"
            >
              SEND EMAIL
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  ">
        <Sponsor />
        <SocialMediaLinks />
      </div>
    </>
  );
}
