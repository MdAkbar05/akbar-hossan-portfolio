import Education from "@/components/Education";

export const metadata = {
  title: "My educations",
  description: "Here are my qualifications of my educations",
};
function EducationPage() {
  return (
    <section className="container mx-auto py-4 px-4 normalFont dark:bg-primary bg-quarterary dark:text-quarterary text-primary space-y-4">
      <h1 className="text-3xl font-bold text-center py-2">
        Lets see{" "}
        <span className="text-quarterary dark:text-primary dark:bg-quarterary bg-primary  rounded-md p-1">
          Qualifications
        </span>
      </h1>
      <Education />
    </section>
  );
}

export default EducationPage;
