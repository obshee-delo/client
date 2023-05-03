export interface CoursesFeatureProps {
    label: string,
    description: string
}

export default function CoursesFeature({ label, description }: CoursesFeatureProps) {
    return <div className="flex flex-col p-[24px] border-dark border-[1px] rounded-[30px] gap-[15px] border-opacity-20">
        <span className="font-semibold text-xl">{ label }</span>
        <span>{ description }</span>
    </div>;
}
