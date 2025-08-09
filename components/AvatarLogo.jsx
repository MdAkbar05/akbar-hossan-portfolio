"use client";
import Logo from "@/public/logo.svg";
import { scale } from "motion";
import Image from "next/image";
import Link from "next/link";
export const AvatarLogo = ({ size }) => {
  return (
    <Link className={`relative w-${size} h-${size} `} href="/">
      <Image
        src={Logo}
        fill
        priority
        className={` scale-150 cursor-pointer object-cover `}
        alt="Logo"
      />
    </Link>
  );
};
