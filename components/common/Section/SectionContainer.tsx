import { ReactNode } from "react";


export interface SectionContainerProps {
    children: ReactNode
}

export default function SectionContainer({ children }: SectionContainerProps) {
    return <div className="w-full flex flex-col bg-light py-[60px] md:py-[86px] gap-[60px] md:gap-[86px]">
        { children }
    </div>;
}
