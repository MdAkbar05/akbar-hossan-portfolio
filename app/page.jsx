import HeroSection from "@/components/heroSection";

export const metadata = {
  title: "Portfolio of MD. Akbar Hossan | Home",
  description:
    "The portfolio of MD. Akbar Hossan. A Frontend Developer from Bangladesh.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-evenly  sm:gap-12 md:gap-28  sm:py-16  md:py-32 bg-quarterary dark:bg-primary text-white">
      <HeroSection />
    </div>
  );
}
