import Achievements from "@/components/Achievements";
export const metadata = {
  title: "My Achievements",
  description: "Here are my achievements of recent courses",
};

function AchievementPage() {
  return (
    <section className="container mx-auto pt-6 pb-12 px-4 normalFont dark:bg-primary bg-quarterary text-primary dark:text-quarterary space-y-6">
      <header className="mx-auto max-w-2xl py-6 text-center md:py-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-blue-400">
          Recognition &amp; growth
        </p>
        <h1 className="titleFont text-3xl font-bold tracking-tight md:text-5xl">
          Achievements
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          A collection of milestones, completed courses, and accomplishments
          from my development journey.
        </p>
      </header>
      <Achievements />
    </section>
  );
}

export default AchievementPage;
