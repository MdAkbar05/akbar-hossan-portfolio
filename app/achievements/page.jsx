import Achievements from "@/components/Achievements";
export const metadata = {
  title: "My Achievements",
  description: "Here are my achievements of recent courses",
};

function AchievementPage() {
  return (
    <section className="container mx-auto py-6 px-4 normalFont dark:bg-primary bg-quarterary text-primary dark:text-quarterary space-y-6">
      <h1 className="text-3xl font-bold text-center ">
        Lets see{" "}
        <span className="text-quarterary dark:text-primary dark:bg-quarterary bg-primary  rounded-md p-1">
          Achievements
        </span>
      </h1>
      <Achievements />
    </section>
  );
}

export default AchievementPage;
