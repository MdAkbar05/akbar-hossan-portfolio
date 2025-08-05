import HeroSection from "@/components/heroSection";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-evenly  sm:gap-12 md:gap-28  sm:py-16  md:py-32 bg-quarterary dark:bg-primary text-white">
      <HeroSection />
    </div>
  );
}
