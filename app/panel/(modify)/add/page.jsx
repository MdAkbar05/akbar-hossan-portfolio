"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import postProject from "@/lib/api-request/post-project";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProject() {
  const router = useRouter();
  const [project, setProject] = useState({
    title: "",
    img: "",
    lan: "",
    desc: "",
    srcLink: "",
    link: "",
  });

  // Handle other input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to process languages

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!project.title || !project.link || !project.img) {
      alert("Please fill out all required fields.");
      return;
    }

    postProject(project); // Ensure `lan` is an array

    setProject({
      title: "",
      img: null,
      lan: "",
      link: "",
      desc: "",
      srcLink: "",
    });

    router.push(`/dashboard/projects`);
  };

  return (
    <div className="  bg-quarterary text-primary flex flex-col p-6">
      <h2 className="text-2xl font-semibold  mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={project.title}
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
            value={project.lan} // Convert array back to string for input
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
            value={project.desc} // Convert array back to string for input
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
            value={project.srcLink}
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
            value={project.link}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
          />
        </div>

        <div>
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
          {project.img && (
            <div className="mt-4">
              <CldImage
                src={project.img}
                alt={project.img}
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
          Add Project
        </button>
      </form>
    </div>
  );
}
