"use client";

import ContactModal from "@/components/contactModal";
import deleteProject from "@/lib/api-request/delete-project";
import getProjects from "@/lib/api-request/get-projects";
import returnArray from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsloading] = useState(false);
  const [projects, setProjects] = useState([]);

  const router = useRouter();
  // fetch project
  const fetchProjects = async () => {
    try {
      setIsloading(true);
      const response = await getProjects();
      setProjects(response.data);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
    console.log(projects);
  }, []);

  // fetch project
  const handleDeleteProject = async (id) => {
    try {
      setIsloading(true);
      const response = await deleteProject(id);
      fetchProjects();
      setIsloading(false);
    } catch (error) {
      console.error("Error deleting projects:", error);
    }
  };

  const handleEdit = (id) => {
    router.push(`/panel/edit?id=${id}`);
  };

  return (
    <div className="w-full mx-auto p-6 m-4 dark:bg-primary dark:text-quarterary bg-quarterary text-primary shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-primary mb-4">Project List</h2>
      <table className="w-full dark:bg-extra bg-slate-200 border  text-start">
        <thead>
          <tr className=" text-justify">
            <th className="border-2 p-2 border-gray-400">Title</th>
            <th className="border-2 p-2 border-gray-400">Language</th>
            <th className="border-2 p-2 border-gray-400">Image</th>
            <th className="border-2 p-2 border-gray-400">Link</th>
            <th className="border-2 p-2 border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id} className="border border-gray-300">
              <td className="border-2 p-2 border-gray-300">{project.title}</td>
              <td className="border-2 p-2 border-gray-300">
                {returnArray(project.lan)}
              </td>
              <td className="border-2 p-2 border-gray-300">
                <CldImage
                  src={project.img}
                  alt={project.title}
                  width={20}
                  height={20}
                  className="w-auto h-20 object-cover"
                />
              </td>
              <td className="border-2 p-2 border-gray-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </td>
              <td className="border-2 p-2 border-gray-300 space-x-2">
                <button
                  onClick={() => handleEdit(project._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  {isLoading ? "Deleting" : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
