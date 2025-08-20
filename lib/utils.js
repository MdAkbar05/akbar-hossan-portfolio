import { CiShoppingTag } from "react-icons/ci";

export default function returnArray(lan) {
  return (
    <>
      {lan.map((item, index) => (
        <a
          href={`https://www.google.com/search?q=${item}`}
          target="_blank"
          className="px-1.5 py-1 dark:bg-tartiary bg-slate-200 dark:text-quarterary text-primary text-xs  mx-0.5 my-1 rounded-md shadow-md flexCenter gap-1 "
          key={index}
        >
          <CiShoppingTag className="dark:text-quarterary text-primary" />
          {item}
        </a>
      ))}
    </>
  );
}

export function getNextJsExperianceTime(startFrom) {
  // from here to now day, count only year also month
  const startDate = new Date(startFrom);
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years !== 0 ? years + " years" : ""} ${
    months !== 0 ? months + " months" : ""
  }`;
}
