"use client";
import { useRouter } from "next/navigation";

export default function ContactModal({ children }) {
  const router = useRouter();
  return (
    <div
      className="inset-0 fixed bg-black/50 z-50 flex justify-center items-center"
      onClick={() => router.push("/")}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
