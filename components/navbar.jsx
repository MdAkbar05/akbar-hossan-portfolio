"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AvatarLogo } from "./AvatarLogo";

import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import { GrServices } from "react-icons/gr";
import { PiProjectorScreenLight } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const router = usePathname();

  const navigation = [
    {
      name: "Project",
      href: "/projects",
      icon: <PiProjectorScreenLight size={28} />,
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
    <div className="w-full flex justify-center items-center bg-quarterary dark:bg-primary/95   backdrop-blur-xl sticky top-0 z-50 dark:shadow-secondary shadow-sm">
      <nav className="container mx-auto flex justify-between items-center text-primary dark:text-quarterary ">
        <AvatarLogo />
        {/* for Desktop  */}
        <ul className="sm:hidden md:flex gap-6 px-4 py-2 rounded-md text-lg">
          <Link href="/">
            <li
              className={`group relative px-3 cursor-pointer ${
                router === "/"
                  ? "dark:bg-quarterary dark:text-primary bg-slate-500 text-quarterary rounded-lg text-sm font-medium shadow-md"
                  : ""
              }`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full hover:text-blue-500">
                <IoHomeOutline size={28} />
              </div>
              <span className="absolute top-0 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-primary">
                Home
              </span>
            </li>
          </Link>
          {navigation.map((nav, index) => (
            <Link key={index} prefetch={nav.prefetch} href={nav.href}>
              <li
                className={`group relative px-3 cursor-pointer ${
                  router === nav.href
                    ? "dark:bg-quarterary dark:text-primary bg-slate-500 text-quarterary rounded-lg text-sm font-medium shadow-md"
                    : ""
                }`}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full hover:text-blue-500">
                  {nav.icon}
                </div>
                <span className="absolute top-0 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 text-primary">
                  {nav.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        {/* for mobile  */}

        <div className=" flex gap-2 items-center justify-center">
          <DarkModeToggle />
          <div className="sm:flex md:hidden">
            <button onClick={() => setIsMenu(!isMenu)}>MENU</button>
            {isMenu && (
              <>
                <div
                  className="fixed inset-0 h-screen bg-black opacity-50"
                  onClick={() => setIsMenu(false)}
                ></div>
                <ul className="absolute top-10 right-0 flex flex-col gap-2 px-4 py-2 rounded-md text-lg bg-quarterary text-primary dark:bg-primary dark:text-quarterary">
                  {navigation.map((nav, index) => (
                    <li
                      key={index}
                      onClick={() => setIsMenu(false)}
                      className={`navButton dark:navButtonDark hover:bg-secondary hover:text-quarterary ${
                        router === nav.href
                          ? "dark:bg-quarterary dark:text-primary bg-slate-500 text-quarterary"
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
        </div>
        <div className="sm:hidden md:flex">
          <Link
            href={"/contacts"}
            className="relative normalFont inline-flex items-center justify-start  px-5 py-2  overflow-hidden font-semibold transition-all bg-tartiary myborder rounded-full hover:bg-white group"
          >
            <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-tartiary ">
              Get In Touch
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <Link prefetch={nav.prefetch} href={nav.href}>
              <li
                key={index}
                className={`navButton dark:navButtonDark hover:bg-secondary hover:text-quarterary ${
                  router === nav.href
                    ? "dark:bg-quarterary dark:text-primary bg-slate-500 text-quarterary"
                    : ""
                }`}
              >
                {nav.name}
              </li>
            </Link> */
}
