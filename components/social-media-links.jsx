import Link from "next/link";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import { GrOverview } from "react-icons/gr";

const SocialMediaLinks = () => {
  const socialMediaLinks = [
    {
      name: "Overview",
      href: "https://mdakbar05.github.io/social-media-info/",
      icon: GrOverview,
    },
    {
      name: "Github",
      href: "https://github.com/MdAkbar05",
      icon: LuGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akbarhossan05/",
      icon: LuLinkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/akbarhossan05",
      icon: LuInstagram,
    },
  ];
  return (
    <div className="flex gap-4">
      {socialMediaLinks.map((socialMedia, index) => (
        <div
          key={index}
          className="p-2 rounded-full bg-secondary ring-1 ring-gray-700 dark:ring-1 text-quarterary hover:bg-primary outershadow hover:scale-105 transition-all duration-300 cursor-pointer"
          title={socialMedia.name}
        >
          <Link
            href={socialMedia.href}
            target="_blank"
            id={socialMedia.name}
            aria-label={socialMedia.name}
            rel="noopener noreferrer"
          >
            <socialMedia.icon size={24} padding={1} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
