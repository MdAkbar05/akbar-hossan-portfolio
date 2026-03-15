import Services from "@/components/Services";

const metadata = {
  title: "Services",
  description: "Here are some of my services",
};

export default function ServicesPage() {
  return (
    <section className="container mx-auto py-10 px-4 dark:bg-primary bg-quarterary dark:text-quarterary text-primary normalFont">
      <div className="flex flex-col md:flex-row gap-2 w-full justify-center items-center text-xl md:text-3xl font-bold text-center py-6">
        <h1>Lets deal</h1>
        <h1 className=" text-quarterary dark:text-primary dark:bg-quarterary bg-primary  rounded-md p-1">
          Services
        </h1>
      </div>
      <Services />
    </section>
  );
}
