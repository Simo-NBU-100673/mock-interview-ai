import React from 'react'
import {cn, getTechLogos} from "@/lib/utils";
import Image from "next/image";

const DisplayTechIcons = async ({techStack}: TechIconProps) => {
    const techIcons = await getTechLogos(techStack);

    return (
        <div className="flex flex-row space-x-2">
            {techIcons.slice(0, 3).map(({tech, url}, index) => (
                <div
                    key={tech}
                    className="relative group bg-dark-300 rounded-full p-2 flex items-center justify-center hover:bg-dark-200 transition w-10 h-10"
                >
                    <span
                        className="tech-tooltip absolute opacity-0 group-hover:opacity-100 bg-gray-800
                        text-white text-xs rounded px-2 py-1 -top-8 left-1/2 -translate-x-1/2 transition-opacity"
                    >
                      {tech}
                    </span>
                    <Image
                        src={url}
                        alt={tech}
                        width={100}
                        height={100}
                        className="size-5"
                    />
                </div>
            ))}
        </div>
    );
}
export default DisplayTechIcons
