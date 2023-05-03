'use client';

import { ReactNode } from "react";
import Subsection from "./Subsection";


export interface SectionProps {
    children: ReactNode
    label?: string,
    description?: string,
}

export default function Section({ label, description, children }: SectionProps) {
    return <div className="w-full flex flex-col gap-12">
        { label && <Subsection className="text-[36px] md:text-[48px] font-semibold">
            { label }
        </Subsection> }
        { description && <Subsection className="text-[18px] md:text-[22px] font-medium">
            Выберите свой предмет из доступных направлений, чтобы начать прохождение курса. 
        </Subsection> }
        { children }
    </div>;
}
