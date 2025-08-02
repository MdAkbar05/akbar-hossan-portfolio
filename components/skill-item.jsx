"use client";
import Image from "next/image";
import { useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";

const SkillItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle the modal state
  };

  const closeModal = (e) => {
    // Close modal only if the click is on the backdrop
    if (e.target.id === "modal-backdrop") {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row w-full justify-between items-center dark:myborder myborderLight  bg-slate-200 text-secondary dark:text-quarterary dark:bg-extra p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 outershadow">
      {/* Horizontal Skill Card */}
      <div
        className="flex items-center gap-4 cursor-pointer w-full md:w-2/3"
        onClick={toggleModal} // Open modal on click
      >
        <Image
          className="w-16 h-16 bg-quarterary  p-2 rounded-full shadow-md"
          src={item.src.src}
          alt={item.name}
          width="100"
          height="100"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold dark:text-quarterary text-primary uppercase">
            {item.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BsCalendarDateFill size={16} />
            <span>{item.time}</span>
          </div>
        </div>
      </div>
      <button
        className="px-4 py-2 dark:bg-primary bg-quarterary dark:text-white text-primary rounded-md dark:hover:bg-tartiary hover:bg-slate-300 cursor-pointer transition-all"
        onClick={toggleModal}
      >
        View Activities
      </button>

      {/* Slide-In Modal */}
      {isModalOpen && (
        <div
          id="modal-backdrop"
          className="fixed inset-0 bg-black/40 bg-opacity-50 flex justify-end z-50"
          onClick={closeModal} // Close modal on backdrop click
        >
          <div
            className="bg-white dark:bg-secondary w-full md:w-1/3 h-full p-6 shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-primary dark:text-quarterary">
                Activities for {item.name}
              </h2>
              <button
                className="text-gray-500 hover:text-primary text-lg"
                onClick={toggleModal} // Close modal on button click
              >
                ✕
              </button>
            </div>
            <ol className=" font-light text-base dark:bg-tartiary bg-slate-200 text-primary dark:text-slate-200 p-4 rounded-lg shadow-inner">
              {item?.activity?.map((activity, index) => (
                <li key={index} className="py-1 ">
                  {activity}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillItem;
