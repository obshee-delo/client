import Subsection from "@components//common/Section/Subsection";
import ProjectCard from "./ProjectCard";
import { preview2 } from "public/photos/previews";
import Section from "@components//common/Section";

export default function Projects() {
    return <Section label="Наши проекты">
        <Subsection className={
            `flex flex-col gap-[15px]`
        }>
            { [ 1, 1, 1 ].map((e, i) => <ProjectCard
                key={ i }
                label="Подкаст «Ещё не всерос(c)»"
                description="Подкаст онлайн-школы Общее Дело о поступлении, олимпиадах и многом другом."
                preview={ preview2 }
                url="example.com"
                secondaryLink={{
                    label: 'Ко всем выпускам',
                    url: 'example.com'
                }}
            />) }
        </Subsection>
    </Section>;
}
