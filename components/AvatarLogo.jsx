"use client";

import Logo from "@/public/assets/img/logo.png";
import Image from "next/image";
import { redirect } from "next/navigation";
export const AvatarLogo = () => (
  <Image
    src={Logo.src}
    width={50}
    height={50}
    alt="Naruto Uzumaki"
    cursor={"pointer"}
    onClick={() => redirect("/")}
  />
);
