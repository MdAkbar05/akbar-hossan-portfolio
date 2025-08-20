import Services from "@/components/Services";

const metadata = {
  title: "Services",
  description: "Here are some of my services",
};

export default function ServicesPage() {
  return (
    <section className="container mx-auto py-10 px-4 dark:bg-primary bg-quarterary dark:text-quarterary text-primary normalFont">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        My Services
      </h1>
      <Services />
    </section>
  );
}
