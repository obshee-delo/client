import { ReactNode } from "react"


export interface CourseCardDetailProps {
    label: string,
    children: ReactNode
}

export default function CourseCardDetail({ label, children }: CourseCardDetailProps) {
    return <div className="w-full flex flex-col">
        <span>{ label }</span>
        <span className="text-lg font-medium">{ children }</span>
    </div>
}
