'use client';

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { stars } from "public/icons";
import { FiArrowRight } from "react-icons/fi";
import { PaletteColor } from "lib/types";
import { backgroundColorOnHoverVariants } from "lib/constants";


export interface ProjectCardProps {
    label: string,
    description: string,
    preview: StaticImageData,
    url: string,
    secondaryLink: {
        label: string,
        url: string,
    },
    backgroundOnHover?: PaletteColor
}

export default function ProjectCard({
    label,
    description,
    preview,
    url,
    secondaryLink,
    backgroundOnHover = "cyan",
}: ProjectCardProps) {
    const { push } = useRouter();

    const navigate = () => push(url);

    return (
        <div
            onClick={ navigate }
            className={
                `group relative cursor-pointer w-full flex flex-col md:flex-row gap-[15px] md:gap-[24px] rounded-[30px] border-dark border-opacity-20 border-[1px] p-[24px] ${ backgroundColorOnHoverVariants[backgroundOnHover] } }
                hover:border-transparent hover:translate-x-4 transition-all duration-300`
            }
        >
            <Image src={ preview } alt="" className="w-full md:w-[300px] rounded-[15px]"/>
            <div className="flex flex-col gap-[15px] items-start z-10">
                <span className="text-[22px] font-semibold">{ label }</span>
                <span className="text-[16px] font-medium">{ description }</span>
                <Link
                    href={ secondaryLink.url }
                    className="w-auto group flex items-center opacity-50 hover:opacity-100 transition-opacity duration-100 md:mt-auto"
                >
                    <span className="text-[16px] font-semibold">{ secondaryLink.label }</span>
                    <FiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:ml-[6px] transition-all duration-100"/>
                </Link>
            </div>
            <Image src={ stars.white } alt="" height={ 200 } className="absolute top-full left-full translate-x-[-80%] translate-y-[-80%] fill-light opacity-0 group-hover:opacity-25 transition-opacity duration-300"/>
        </div>
    );
}
