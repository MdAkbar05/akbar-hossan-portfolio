import HeroSection from "@/components/heroSection";
import ProjectPage from "@/app/projects/page";
import AchievementPage from "@/app/achievements/page";
import EducationPage from "@/app/educations/page";
import ServicesPage from "@/app/services/page";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-evenly  sm:gap-12 md:gap-28  sm:py-16  md:py-32 bg-quarterary dark:bg-primary text-white">
      <HeroSection />
      <ProjectPage />
      <AchievementPage />
      <EducationPage />
      <ServicesPage />
    </div>
  );
}
