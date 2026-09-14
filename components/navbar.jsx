"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AvatarLogo } from "./AvatarLogo";

import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import { GrServices } from "react-icons/gr";
import { PiProjectorScreenLight } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { LuActivity } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { LuMenu, LuX } from "react-icons/lu";
import ViewCounter from "./ViewCounter";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const router = usePathname();

  const navigation = [
    {
      name: "Projects",
      href: "/projects",
      icon: <PiProjectorScreenLight size={28} />,
      prefetch: false,
    },
    {
      name: "Experiences",
      href: "/experiences",
      icon: <LuActivity size={28} />,
      prefetch: false,
    },
    {
      name: "Skills",
      href: "/skills",
      icon: <GiSkills size={28} />,
      prefetch: true,
    },
    {
      name: "Education",
      href: "/educations",
      icon: <MdCastForEducation size={28} />,
      prefetch: true,
    },
    {
      name: "Achievements",
      href: "/achievements",
      icon: <TbCertificate size={28} />,
      prefetch: true,
    },
    {
      name: "Services",
      href: "/services",
      icon: <GrServices size={28} />,
      prefetch: true,
    },
    // { name: "Admin", href: "/panel", prefetch: false },
  ];

  return (
    <div className="w-full flex justify-center items-center border-b border-slate-200/80 bg-white/90 backdrop-blur-xl sticky top-0 z-50 dark:border-white/10 dark:bg-primary/95">
      <nav className="container mx-auto flex min-h-[4.5rem] justify-between items-center text-primary dark:text-quarterary px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <div className="relative flex md:hidden">
            <button
              onClick={() => setIsMenu(!isMenu)}
              aria-expanded={isMenu}
              aria-label={
                isMenu ? "Close navigation menu" : "Open navigation menu"
              }
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-primary transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-white/10 dark:text-quarterary dark:hover:bg-white/10"
            >
              {isMenu ? (
                <LuX size={22} strokeWidth={2.25} />
              ) : (
                <LuMenu size={22} strokeWidth={2.25} />
              )}
            </button>
            {isMenu && (
              <>
                <button
                  aria-label="Close navigation menu"
                  className="fixed inset-0 z-40 h-screen w-screen cursor-default bg-slate-950/30 backdrop-blur-[2px]"
                  onClick={() => setIsMenu(false)}
                ></button>
                <ul className="absolute left-0 top-full z-50 mt-3 flex w-56 flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2 text-base text-primary shadow-xl dark:border-white/10 dark:bg-primary dark:text-quarterary">
                  <li
                    onClick={() => setIsMenu(false)}
                    className={`rounded-lg px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-white/10 ${
                      router === "/"
                        ? "bg-emerald-50 font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                        : ""
                    }`}
                  >
                    <Link href="/">Home</Link>
                  </li>
                  {navigation.map((nav, index) => (
                    <li
                      key={index}
                      onClick={() => setIsMenu(false)}
                      className={`rounded-lg px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-white/10 ${
                        router === nav.href
                          ? "bg-emerald-50 font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
                          : ""
                      }`}
                    >
                      <Link prefetch={nav.prefetch} href={nav.href}>
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <AvatarLogo key={1} size={14} />
        </div>
        {/* for Desktop  */}
        <ul className="hidden items-center gap-2 px-4 py-2 text-lg md:flex lg:gap-4">
          <li
            className={`group relative cursor-pointer rounded-xl px-3 py-2 transition-colors ${
              router === "/"
                ? "bg-slate-100 text-emerald-600 dark:bg-white/10 dark:text-emerald-400"
                : ""
            }`}
          >
            <Link href="/">
              <div className="flex h-9 w-9 items-center justify-center rounded-full">
                <IoHomeOutline size={28} />
              </div>
              <span className="pointer-events-none absolute left-1/2 top-full z-20 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-primary opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-2 group-hover:scale-100 group-hover:opacity-100 group-focus-within:translate-y-2 group-focus-within:scale-100 group-focus-within:opacity-100 dark:border-white/10 dark:bg-primary dark:text-quarterary">
                Home
              </span>
            </Link>
          </li>
          {navigation.map((nav, index) => (
            <li
              key={index}
              className={`group relative cursor-pointer rounded-xl px-3 py-2 transition-colors ${
                router === nav.href
                  ? "bg-slate-100 text-emerald-600 dark:bg-white/10 dark:text-emerald-400"
                  : ""
              }`}
            >
              <Link prefetch={nav.prefetch} href={nav.href}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full">
                  {nav.icon}
                </div>
                <span className="pointer-events-none absolute left-1/2 top-full z-20 -translate-x-1/2 translate-y-1 scale-95 whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-primary opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-2 group-hover:scale-100 group-hover:opacity-100 group-focus-within:translate-y-2 group-focus-within:scale-100 group-focus-within:opacity-100 dark:border-white/10 dark:bg-primary dark:text-quarterary">
                  {nav.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {/* for mobile  */}

        <div className="flex items-center justify-center gap-2">
          <div className="hidden md:block">
            <ViewCounter />
          </div>
          <DarkModeToggle />
          <Link
            href="/contacts"
            className="hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 md:flex md:px-5 md:text-base dark:bg-emerald-500  dark:hover:bg-emerald-400 dark:focus-visible:ring-offset-primary"
          >
            Get In Touch
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
