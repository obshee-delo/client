import Subsection from "@components//common/Section/Subsection";
import { ReactNode } from "react";


export interface CoursesListCategory {
    children: ReactNode
}

export default function CoursesList({ children }: CoursesListCategory) {
    return <Subsection className="flex flex-col gap-[15px] md:grid md:grid-cols-2">
        { children }
    </Subsection>;
}
