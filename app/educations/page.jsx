import Education from "@/components/Education";

export const metadata = {
  title: "My educations",
  description: "Here are my qualifications of my educations",
};
function EducationPage() {
  return (
    <section className="container mx-auto py-4 px-4 normalFont dark:bg-primary bg-quarterary dark:text-quarterary text-primary space-y-4">
      <div className="flex flex-col md:flex-row w-full justify-center items-center text-xl md:text-3xl font-bold text-center py-2">
        <h1>Lets see </h1>
        <h1 className=" text-quarterary dark:text-primary dark:bg-quarterary bg-primary  rounded-md p-1">
          Qualifications
        </h1>
      </div>
      <Education />
    </section>
  );
}

export default EducationPage;
