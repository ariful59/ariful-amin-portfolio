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
                    mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-sky-200"
                } hover:scale-100 link`}
            >

                <ul className="mt-5 opacity-40 text-xl list-disc mx-4 laptop:text-justify">
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