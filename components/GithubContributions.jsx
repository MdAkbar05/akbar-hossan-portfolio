import Image from "next/image";

export default function GithubContributions() {
  return (
    <section
      id="github-contributions"
      className="container mx-auto px-4 py-6 normalFont text-primary dark:text-quarterary"
    >
      <header className="mx-auto max-w-2xl py-6 text-center md:py-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-blue-400">
          Open source activity
        </p>
        <h2 className="titleFont text-3xl font-bold tracking-tight md:text-5xl">
          GitHub Contributions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          A snapshot of my recent coding activity. Visit my GitHub profile to
          explore projects and contributions.
        </p>
      </header>
      <a
        href="https://github.com/MdAkbar05"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View MdAkbar05's GitHub profile and contribution history"
        className="mx-auto block  overflow-x-auto rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:p-6"
      >
        <Image
          src="https://ghchart.rshah.org/MdAkbar05"
          alt="GitHub contribution calendar for MdAkbar05"
          width={900}
          height={150}
          unoptimized
          className="mx-auto h-auto min-w-[600px] w-full"
        />
      </a>
    </section>
  );
}
