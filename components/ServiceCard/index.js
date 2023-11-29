import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ link, name, post, duration, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-sky-200"
      }`}
    >
      <h1 className="text-3xl font-bold">{name} {link ? <a href={link} className="italic text-xs"> (URL)</a> : <a className="italic text-xs" href={"https://www.samsung.com/us/business/solutions/industries/healthcare/heartwise-healthcare-app/"}>(Samsung Heartwise URL)</a>}</h1>
        <h1 className="italic text-xl">{post}</h1>
        <h1 className="italic text-xs">{duration}</h1>

      <ul className="mt-5 opacity-40 text-xl list-disc ml-10 laptop:text-justify">
        {
          description.map((des, k) => {
            return <li key={k}>{des}</li>
          })
        }
      </ul>
    </div>
  );
};

export default ServiceCard;
