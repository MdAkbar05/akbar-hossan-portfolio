import Logo from "@/public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const AvatarLogo = ({ scale = 100 }) => {
  const router = useRouter();
  return (
    <Image
      src={Logo.src}
      width={50}
      height={50}
      className={`scale-${scale} mx-2 cursor-pointer`}
      alt="Naruto Uzumaki"
      onClick={() => router.push("/")}
    />
  );
};
