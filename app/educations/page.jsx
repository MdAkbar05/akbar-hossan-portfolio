import Education from "@/components/Education";

export const metadata = {
  title: "My educations",
  description: "Here are my qualifications of my educations",
};
function EducationPage() {
  return (
    <section className="container mx-auto py-4 px-4 normalFont dark:bg-primary bg-quarterary dark:text-quarterary text-primary space-y-4">
      <header className="mx-auto max-w-2xl py-6 text-center md:py-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-blue-400">
          Academic background
        </p>
        <h1 className="titleFont text-3xl font-bold tracking-tight md:text-5xl">
          Education &amp; qualifications
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          The learning milestones that shaped my foundation in computer science
          and software development.
        </p>
      </header>
      <Education />
    </section>
  );
}

export default EducationPage;
