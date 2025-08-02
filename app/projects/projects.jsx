"use client";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import getProjects from "@/lib/api-request/get-projects";
import returnArray from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import { MdSort } from "react-icons/md";
import Project from "@/components/projects/project";
import ProjectLoader from "@/components/loaders/projectLoader";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
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
    <div className="container mx-auto bg-quarterary dark:bg-primary text-white dark:text-quarterary py-4">
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
                fetchProjects("Recents");
                setActiveRecent(true);
                setActiveAZ(false);
                setActiveGraphics(false);
                setActiveWeb(false);
              }}
            >
              Recents
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
        </div>
      )}

      {/* projects */}

      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-2 grid-rows-4 gap-4  p-4">
          {projects?.map((p, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-4 col-span-2  sm:p-4 md:p-2 border-2 dark:border-secondary border-slate-300 rounded-md bg-quarterary dark:bg-extra"
            >
              <div className="relative ">
                <CldImage
                  src={p.img}
                  alt={p.title}
                  width={1000}
                  height={1000}
                  className="object-cover h-full rounded-md dark:rounded-2xl"
                />
                <div className="absolute z-10  w-full h-full top-0 bg-gradient-to-l dark:from-extra from-tartiary from-5% to-transparent"></div>
              </div>
              <div>
                <div className="flex flex-col gap-4 items-start justify-between h-full py-4 ">
                  <h2 className="sm:text-sm md:text-2xl dark:gradient-text lightGradient-text sm:font-normal md:font-bold uppercase text-center  py-1">
                    {p?.title}
                  </h2>
                  <p className="sm:text-sm md:text-base text-gray-400  py-1">
                    {p?.desc &&
                      p.desc
                        .split(".")
                        .filter((sentence) => sentence.trim() !== "")
                        .map((sentence, index) => (
                          <li
                            key={index}
                            className="sm:text-sm md:text-base dark:text-gray-400 text-secondary py-1"
                          >
                            {sentence.trim()}.
                          </li>
                        ))}
                  </p>

                  <div className="font-thin text-sm text-center flex gap-x-4">
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
      ) : (
        <div className="text-red-500 text-center mt-5 text-2xl font-semibold ">
          No Projects Found!
        </div>
      )}
    </div>
  );
};

export default Projects;
