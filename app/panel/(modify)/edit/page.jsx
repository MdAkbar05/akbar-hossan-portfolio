"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import updateProject from "@/lib/api-request/update-project";
import { useRouter } from "next/navigation";

require("dotenv").config();

export default function EditProject() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [project, setProject] = useState({
    title: "",
    img: "",
    lan: "",
    desc: "",
    srcLink: "",
    link: "",
  });

  const searchParams = useSearchParams();

  // fetch project
  const fetchProjects = async () => {
    try {
      setIsloading(true);
      const fetchUrl = `${
        process.env.NEXT_PUBLIC_BACKEND_URL
      }/api/projects/${searchParams.get("id")} `;
      const response = await fetch(fetchUrl);
      const { project } = await response.json();

      setProject({
        title: project.title,
        img: project.img,
        lan: project.lan,
        desc: project.desc,
        srcLink: project.srcLink,
        link: project.link,
      });
      setProjectId(project._id);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
    console.log(project);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(project);
  };

  const handleSubmit = (e) => {
    alert("Updated project");
    e.preventDefault();
    if (!project.title || !project.link || !project.img) {
      alert("Please fill out all required fields.");
      return;
    }

    updateProject(projectId, project);
    router.push(`/dashboard/projects`);
  };

  return (
    <div className="  bg-quarterary text-primary flex flex-col p-6">
      <h2 className="text-2xl font-semibold  mb-4">Update Project</h2>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={project?.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              name="lan"
              value={project?.lan}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="desc"
              value={project?.desc}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Source Link
            </label>
            <input
              type="url"
              name="srcLink"
              value={project?.srcLink}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Project Link
            </label>
            <input
              type="url"
              name="link"
              value={project?.link}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            />
          </div>

          <div className="mt-4 border-2 border-gray-300 rounded-lg p-4">
            <CldUploadWidget
              uploadPreset="project_images"
              onSuccess={({ event, info }) => {
                setProject((prev) => ({ ...prev, img: info.public_id }));
                console.log(info);
              }}
            >
              {({ open }) => {
                return (
                  <button
                    className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={() => open()}
                  >
                    Upload Project Image
                  </button>
                );
              }}
            </CldUploadWidget>
            {project?.img && (
              <div className="mt-4">
                <CldImage
                  src={project?.img}
                  alt={project?.img}
                  width={"330"}
                  height={"200"}
                  className="max-w-lg mx-auto rounded-lg"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Update Project
          </button>
        </form>
      )}
    </div>
  );
}
