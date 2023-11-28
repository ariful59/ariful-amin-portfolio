import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";

const ExtraCuricular = ({item}) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState();

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div>
            <div
                className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
                    mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
                } hover:scale-105 link`}
            >

                <ul className="mt-5 opacity-40 text-xl list-disc mx-8 pr-10 text-justify">
                    {
                        item.map((des, index) => {
                            return <li key={index}>{des}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default ExtraCuricular;