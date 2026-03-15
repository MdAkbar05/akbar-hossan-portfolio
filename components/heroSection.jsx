export const dynamic = "force-dynamic";

import SocialMediaLinks from "./social-media-links";
import Sponsor from "./Sponsor";
import Image from "next/image";
import Profile from "@/public/assets/img/akbar-hossan-transparent-image3.webp";
import Link from "next/link";
import { getNextJsExperienceTime } from "@/lib/utils";
import ResumeButton from "./ResumeButton";

export default function HeroSection() {
  let nextJsExperienceTime = getNextJsExperienceTime("2025-02-18");
  let reactJsExperienceTime = getNextJsExperienceTime("2023-10-05");
  return (
    <main className="container mx-auto sm:py-16  md:py-32 lg:space-y-28 space-y-8">
      <ResumeButton />
      <ResumeButton isLeft />
      <div className="text-slate-600 flex sm:flex-col md:flex-row items-center justify-center gap-12 w-full ">
        <div className="relative sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-slate-600 ">
          <Image
            src={Profile}
            alt="MD. AKbar Hossan Full Stack Developer Portfolio"
            fill
            sizes="100%"
            className="object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            placeholder="blur"
            priority
          />
        </div>
        <div className="flex flex-col justify-center gap-4 m-0 px-2 lg:px-10">
          <div className="space-y-1 text-center lg:text-start">
            <h1 className=" sm:text-3xl md:text-5xl  titleFont font-semibold text-primary dark:text-quarterary ">
              MD. Akbar Hossan
            </h1>
            <h2 className="dark:bright-text  sm:text-sm md:text-lg normalFont gradient-text dark:text-quarterary">
              a React JS and Next Js Developer
            </h2>
          </div>
          <p className="sm:text-lg md:text-2xl nameFont text-primary dark:text-quarterary text-center lg:text-start">
            I've been working as a React JS developer for{" "}
            {reactJsExperienceTime} <br /> and Next JS developer for{" "}
            {nextJsExperienceTime}.
          </p>
          <div className="space-x-4 py-2 mx-auto lg:mx-0">
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
      <div className="flex flex-col gap-4 items-center justify-center  ">
        <Sponsor />
        <SocialMediaLinks />
      </div>
    </main>
  );
}
