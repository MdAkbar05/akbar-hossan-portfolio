import Services from "@/components/Services";

const metadata = {
  title: "Services",
  description: "Here are some of my services",
};

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-4 pb-16 pt-10 normalFont text-primary dark:text-quarterary md:pt-16">
      <header className="mx-auto max-w-2xl pb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:text-blue-400">
          What I can build
        </p>
        <h1 className="titleFont text-3xl font-bold tracking-tight md:text-5xl">
          Services for ambitious products
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 md:text-base">
          Practical development support from polished interfaces to dependable
          full-stack systems.
        </p>
      </header>
      <Services />
    </section>
  );
}
