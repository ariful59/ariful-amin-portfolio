import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, degree, duration}) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState();

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div className={'border-2 border-black p-4'}>
        <div
            className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
                mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-sky-200"
            }`}
        >
            <h1 className="text-3xl font-bold">{name} </h1>
            <h1 className="italic text-xl">{degree}</h1>
            <h1 className="italic text-xs">{duration}</h1>
        </div>
        </div>
    );
};

export default ServiceCard;