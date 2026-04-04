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
    <main className="container mx-auto sm:py-16 md:py-32 lg:space-y-24 space-y-10">
      {/* ── Hero Content ── */}
      <div className="flex sm:flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full">
        {/* Profile photo with glow ring */}
        {/* Profile photo with resume buttons orbiting around it */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          {/* Ambient glow behind photo */}
          <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-green-500 dark:bg-blue-500 scale-110 pointer-events-none" />

          {/* Download Resume — bottom-left */}
          <div className="absolute -bottom-4 -left-10 z-10">
            <ResumeButton isLeft={false} />
          </div>

          {/* View Resume — bottom-right */}
          <div className="absolute -bottom-4 -right-7 z-10">
            <ResumeButton isLeft={true} />
          </div>

          {/* Photo circle */}
          <div
            className="relative sm:w-44 sm:h-44 md:w-60 md:h-60 rounded-full overflow-hidden
            ring-2 ring-green-500 dark:ring-blue-500
            shadow-[0_0_40px_rgba(0,200,80,0.25)] dark:shadow-[0_0_40px_rgba(36,19,200,0.3)]"
          >
            <Image
              src={Profile}
              alt="Md. Akbar Hossan — Full Stack Developer"
              fill
              sizes="(max-width: 768px) 176px, 240px"
              className="object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              placeholder="blur"
              priority
            />
          </div>
        </div>

        {/* Text block */}
        <div className="flex flex-col justify-center gap-5 px-2 lg:px-8 text-center lg:text-start">
          {/* Name — now the dominant H1 */}
          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-widest uppercase text-green-500 dark:text-blue-400 normalFont">
              Full Stack Developer
            </p>
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl titleFont font-bold gradient-text leading-tight">
              Md. Akbar Hossan
            </h1>
            {/* Specialisation — now a supporting subtitle */}
            <h2 className="sm:text-base md:text-lg lg:text-xl normalFont text-slate-500 dark:text-slate-400 font-medium">
              React.js &amp; Next.js Specialist &nbsp;·&nbsp; B.Sc. CSE
            </h2>
          </div>

          {/* Bio — concise and confident */}
          <p className="sm:text-base md:text-lg normalFont text-slate-600 dark:text-slate-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Building production-grade web apps with{" "}
            <Link
              href="https://reactjs.org/"
              className="text-green-600 dark:text-blue-400 font-medium"
            >
              React.js
            </Link>{" "}
            and{" "}
            <Link
              href="https://nextjs.org/"
              className="text-green-600 dark:text-blue-400 font-medium"
            >
              Next.js
            </Link>{" "}
            . Focused on clean architecture, smooth UX, and shipping real
            products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 py-1 justify-center lg:justify-start">
            <Link
              href="/contacts"
              className="titleFont inline-flex items-center gap-2 cursor-pointer transition-all duration-300
                bg-green-600 hover:bg-green-500 dark:bg-blue-600 dark:hover:bg-blue-500
                border-2 border-green-400 dark:border-blue-400
                text-white py-2 px-6 rounded-lg font-semibold
                shadow-[0_0_30px_rgba(0,200,80,0.4)] dark:shadow-[0_0_30px_rgba(36,19,200,0.4)]
                hover:shadow-[0_0_50px_rgba(0,220,80,0.6)] dark:hover:shadow-[0_0_50px_rgba(36,19,200,0.6)]
                sm:text-sm md:text-base"
            >
              Hire Me
            </Link>
            <Link
              href="mailto:akbar.hossan.official@gmail.com"
              className="titleFont inline-flex items-center gap-2 cursor-pointer transition-all duration-300
                border-2 border-slate-400 dark:border-slate-600
                text-slate-700 dark:text-slate-200
                hover:bg-slate-100 dark:hover:bg-slate-800
                py-2 px-6 rounded-lg font-semibold
                sm:text-sm md:text-base"
            >
              Send Email
            </Link>
          </div>

          {/* Quick stats chips */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className="text-xs px-3 py-1 rounded-full bg-green-50 dark:bg-blue-950 text-green-700 dark:text-blue-300 border border-green-200 dark:border-blue-800 normalFont font-medium">
              {reactJsExperienceTime} React
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-green-50 dark:bg-blue-950 text-green-700 dark:text-blue-300 border border-green-200 dark:border-blue-800 normalFont font-medium">
              {nextJsExperienceTime} Next.js
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 normalFont font-medium">
              Full Stack (MERN)
            </span>
          </div>
        </div>
      </div>

      {/* ── Certifications + Social ── */}
      <div className="flex flex-col gap-3 items-center justify-center">
        {/* Label above logos */}
        <p className="sm:hidden md:block text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 normalFont">
          Certified &amp; Trained by
        </p>
        <Sponsor />
        <SocialMediaLinks />
      </div>
    </main>
  );
}
