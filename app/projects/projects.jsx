"use client";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import getProjects from "@/lib/api-request/get-projects";
import returnArray from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import { MdSort } from "react-icons/md";
import { LuImage } from "react-icons/lu";

import ProjectLoader from "@/components/loaders/projectLoader";
import { FaHighlighter } from "react-icons/fa";

const ProjectThumbnail = ({ image, title }) => {
  const [hasImageError, setHasImageError] = useState(false);
  const imageSource = typeof image === "string" ? image.trim() : "";

  if (!imageSource || hasImageError) {
    return (
      <div className="flex h-full min-h-44 flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-200 px-6 text-center text-slate-500 dark:from-extra dark:via-primary dark:to-secondary dark:text-slate-300">
        <LuImage size={48} strokeWidth={1.5} />
        <span className="text-sm font-medium uppercase tracking-widest">
          {title || "Project preview"}
        </span>
      </div>
    );
  }

  return (
    <CldImage
      src={imageSource}
      alt={title || "Project preview"}
      fill
      sizes="(max-width: 649px) 100vw, 50vw"
      onError={() => setHasImageError(true)}
      className="rounded-md object-cover dark:rounded-2xl"
    />
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeRecent, setActiveRecent] = useState(false);
  const [activeAZ, setActiveAZ] = useState(false);
  const [activeGraphics, setActiveGraphics] = useState(false);
  const [activeWeb, setActiveWeb] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const fetchProjects = async (query) => {
    try {
      setIsloading(true);

      const response = await getProjects(query);
      setProjects(response.data);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
    setActiveRecent(true);
  }, []);

  return (
    <div className="container mx-auto bg-quarterary dark:bg-primary text-white dark:text-quarterary py-6">
      <div className="grid grid-cols-1 grid-rows-1  py-4">
        {/* sort by  */}
        <div className=" ">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className="uppercase text-primary dark:text-quarterary">
              <MdSort size={32} />
            </div>
            <div
              className={`py-1 px-3 rounded-full cursor-pointer transition-colors ${
                activeRecent
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-[#313030] hover:text-green-500"
              }`}
              onClick={() => {
                fetchProjects("Recent");
                setActiveRecent(true);
                setActiveAZ(false);
                setActiveGraphics(false);
                setActiveWeb(false);
              }}
            >
              Recent
            </div>
            <div
              className={`py-1 px-3 rounded-full cursor-pointer transition-colors ${
                activeAZ
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-[#313030] hover:text-green-500"
              }`}
              onClick={() => {
                fetchProjects("A-Z");
                setActiveAZ(true);
                setActiveRecent(false);
                setActiveGraphics(false);
                setActiveWeb(false);
              }}
            >
              A-Z
            </div>
            <div
              className={`py-1 px-3 rounded-full cursor-pointer transition-colors ${
                activeGraphics
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-[#313030] hover:text-green-500"
              }`}
              onClick={() => {
                fetchProjects("Graphics");
                setActiveAZ(false);
                setActiveRecent(false);
                setActiveGraphics(true);
                setActiveWeb(false);
              }}
            >
              Graphics
            </div>
            <div
              className={`py-1 px-3 rounded-full cursor-pointer transition-colors ${
                activeWeb
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-[#313030] hover:text-green-500"
              }`}
              onClick={() => {
                fetchProjects("Web");

                setActiveAZ(false);
                setActiveRecent(false);
                setActiveGraphics(false);
                setActiveWeb(true);
              }}
            >
              Web Projects (MERN)
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="col-span-2 text-center">
          <ProjectLoader />
          <ProjectLoader />
          <ProjectLoader />
        </div>
      )}

      {/* projects */}

      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-2 grid-rows-4 gap-4  p-4">
          {projects?.map((p, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row sm:gap-0 md:gap-4 col-span-2 max-h-fit sm:p-4 md:p-2 border-2 dark:border-secondary border-slate-300 rounded-md bg-quarterary dark:bg-extra"
            >
              <div className="relative sm:h-44 md:h-56 lg:h-[490px] sm:w-full md:w-1/2 lg:w-1/2 rounded-md dark:rounded-2xl overflow-hidden">
                <ProjectThumbnail image={p?.img} title={p?.title} />
                <div className="md:block sm:hidden absolute z-10  w-full h-full top-0 bg-gradient-to-l dark:from-extra from-quarterary from-5% to-transparent to-50%"></div>
              </div>
              <div>
                <div className="flex flex-col gap-4 items-start justify-between h-full py-4 ">
                  <h2 className="sm:text-lg md:text-2xl dark:gradient-text gradient-text sm:font-semibold md:font-bold uppercase text-center  py-1">
                    {p?.title}
                  </h2>

                  <ul className="w-full max-w-2xl space-y-2 py-1">
                    {p?.desc &&
                      p.desc
                        .split(".")
                        .filter((sentence) => sentence.trim() !== "")
                        .map((sentence, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-2 text-sm leading-relaxed text-secondary transition-colors hover:border-emerald-300 hover:bg-emerald-50 dark:border-white/10 dark:bg-primary/70 dark:text-gray-300 dark:hover:border-blue-500/50 dark:hover:bg-extra sm:text-sm md:text-base"
                          >
                            <FaHighlighter className="mt-1 shrink-0 text-emerald-600 dark:text-blue-400" />
                            <span>{sentence.trim()}.</span>
                          </li>
                        ))}
                  </ul>
                  {/* created At date  */}
                  <span className="lightGradient-text">
                    Publication Date: {p?.createdAt.split("T")[0]}
                  </span>

                  <div className="font-thin text-sm text-center flex gap-x-4 sm:gap-y-3 md:gap-y-0  flex-wrap">
                    {returnArray(p.lan)}
                  </div>

                  <div className="space-x-4">
                    <Button title={"Visit Live"} link={p?.link} />
                    <Button reverse={true} link={p?.srcLink} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : isLoading ? null : (
        <div className="text-red-500 text-center mt-5 text-2xl font-semibold ">
          No Projects Found!
        </div>
      )}
    </div>
  );
};

export default Projects;
