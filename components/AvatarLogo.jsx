"use client";
import Logo from "@/public/logo.svg";
import { scale } from "motion";
import Image from "next/image";
import Link from "next/link";
export const AvatarLogo = ({ scale }) => {
  console.log(scale);
  return (
    <Link href="/">
      <Image
        src={Logo.src}
        width={50}
        height={50}
        className={`${scale ? "scale-150" : "scale-100"} mx-2 cursor-pointer`}
        alt="Logo"
      />
    </Link>
  );
};
