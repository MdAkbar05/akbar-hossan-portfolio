import React from "react";
import { skills } from "./skillsData";
import SkillItem from "@/components/skill-item";

export const metadata = {
  title: "My skills in mordern technologies",
  description: "Here are some of my skills in modern technologies",
};
const Skills = () => {
  return (
    <section className="container mx-auto bg-quarterary dark:bg-primary text-primary dark:text-quarterary">
      <div className="grid grid-cols-1 grid-rows-1  py-4 ">
        <h1 className="text-3xl font-bold text-center py-2">
          Lets see{" "}
          <span className="text-quarterary dark:text-primary dark:bg-quarterary bg-primary  rounded-md p-1">
            skills
          </span>
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 place-items-center py-2">
          {skills.map((skill) => (
            <SkillItem key={skill.id} item={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
