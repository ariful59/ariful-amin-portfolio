import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ResearchExperience = ({name, duration, description, publication}) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState();

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div
            className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
                mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
            } hover:scale-105 link`}
        >
            <h1 className="text-3xl font-bold">{name} </h1>
            <h1 className="italic text-xs">{duration}</h1>

            <ul className="mt-5 opacity-40 text-xl list-disc mx-8 text-justify">
                {
                    description.map((des, k) => {
                        return <li key={k}>{des}</li>
                    })
                }
            </ul>
            <p className="mt-5 text-2xl list-disc mr-8 text-justify text-blue-500">{<a href="https://ieeexplore.ieee.org/document/8289024">{publication}</a>}</p>
        </div>
    );
};

export default ResearchExperience;