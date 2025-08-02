"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AvatarLogo } from "./AvatarLogo";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const router = usePathname();

  const navigation = [
    { name: "Project", href: "/projects", prefetch: false },
    { name: "Skills", href: "/skills", prefetch: true },
    { name: "Education", href: "/educations", prefetch: true },
    { name: "Achievements", href: "/achievements", prefetch: true },
    { name: "Services", href: "/services", prefetch: true },
    // { name: "Admin", href: "/panel", prefetch: false },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-quarterary dark:bg-primary/95   backdrop-blur-xl sticky top-0 z-50 dark:shadow-secondary shadow-sm">
      <nav className="container mx-auto flex justify-between items-center text-primary dark:text-quarterary ">
        <AvatarLogo />
        {/* for Desktop  */}
        <ul className="sm:hidden md:flex gap-6 px-4 py-2 rounded-md text-lg">
          {navigation.map((nav, index) => (
            <li
              key={index}
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
          <Button link="/contacts" title="Get In Touch" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
