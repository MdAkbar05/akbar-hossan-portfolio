import Achievements from "@/components/Achievements";
export const metadata = {
  title: "My Achievements",
  description: "Here are my achievements of recent courses",
};

function AchievementPage() {
  return (
    <section className="container mx-auto py-6 px-4 normalFont dark:bg-primary bg-quarterary text-primary dark:text-quarterary space-y-6">
      <div className="flex flex-col md:flex-row w-full justify-center items-center text-xl md:text-3xl font-bold text-center py-2">
        <h1>Lets see </h1>
        <h1 className=" text-quarterary dark:text-primary dark:bg-quarterary bg-primary  rounded-md p-1">
          Achievements
        </h1>
      </div>
      <Achievements />
    </section>
  );
}

export default AchievementPage;
