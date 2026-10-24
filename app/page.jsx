import HeroSection from "@/components/heroSection";
import ProjectPage from "@/app/projects/page";
import AchievementPage from "@/app/achievements/page";
import EducationPage from "@/app/educations/page";
import ServicesPage from "@/app/services/page";
import ExperiencePage from "@/app/experiences/page";
import CodeforcesContributions from "@/components/CodeforcesContributions";
import GithubContributions from "@/components/GithubContributions";

export default function Page() {
  return (
    <div className="space-y-20 mb-10   bg-quarterary dark:bg-primary text-white">
      <HeroSection />
      <ProjectPage />
      <ExperiencePage />
      <AchievementPage />
      <EducationPage />
      <ServicesPage />
      <CodeforcesContributions />
      <GithubContributions />
    </div>
  );
}
