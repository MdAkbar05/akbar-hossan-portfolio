"use client";
import dcl from "@/public/assets/sponsor-img/Daffodil_computers_ltd.webp";
import edge from "@/public/assets/sponsor-img/EDGE_LOGO.webp";
import ict from "@/public/assets/sponsor-img/ict_division_logo-iJ6uC05B.webp";
import ostad from "@/public/assets/sponsor-img/OSTAD_LOGO.webp";
import dyd from "@/public/assets/sponsor-img/DYD_LOGO.webp";
import lws from "@/public/assets/sponsor-img/lwsLogo.svg";

const Sponsor = () => {
  const data = [
    {
      id: 1,
      img: edge,
      title: "EDGE",
    },
    {
      id: 2,
      img: ict,
      title: "ICT Division",
    },
    {
      id: 3,
      img: lws,
      title: "Learn with Sumit",
    },
    {
      id: 4,
      img: ostad,
      title: "OSTAD",
    },
    {
      id: 5,
      img: dyd,
      title: "Youth Development",
    },

    {
      id: 6,
      img: dcl,
      title: "Daffodil Computers Ltd",
    },
  ];
  return (
    <div className="p-4 ">
      <div className="sm:hidden md:grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {data.slice(0, 4).map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex items-center justify-center bg-slate-200  dark:myborder myborderLight p-1 rounded-lg"
          >
            <img
              src={sponsor.img.src}
              alt={sponsor.title}
              className="w-20 h-auto px-1 py-0.5"
              loading="lazy"
              decoding="async"
              title={sponsor.title}
            />
          </div>
        ))}
        <div className="flex">
          {data.slice(4, data.length).map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center bg-slate-200 border-2 border-tartiary  rounded-full w-12 h-12 -mr-10"
            ></div>
          ))}
          <div className="flex items-center justify-center bg-slate-200 border-2 font-semibold cursor-pointer text-tartiary border-tartiary  rounded-full w-12 h-12 ">
            view+
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
