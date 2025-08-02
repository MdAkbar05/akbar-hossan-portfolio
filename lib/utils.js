import { CiShoppingTag } from "react-icons/ci";

export default function returnArray(lan) {
  return (
    <>
      {lan.map((item, index) => (
        <a
          href={`https://www.google.com/search?q=${item}`}
          target="_blank"
          className="px-1.5 py-1 dark:bg-tartiary bg-slate-200 dark:text-quarterary text-primary font-normal mx-0.5 rounded-md shadow-md flexCenter gap-1 "
          key={index}
        >
          <CiShoppingTag className="dark:text-quarterary text-primary" />
          {item}
        </a>
      ))}
    </>
  );
}
