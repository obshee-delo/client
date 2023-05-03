import Section from "@components//common/Section";
import Subsection from "@components//common/Section/Subsection";
import Image from "next/image";
import { stars } from "public/icons";
import CoursesFeature from "./CoursesFeature";

export default function CoursesFeatures() {
    return <Section>
        <Subsection className="flex flex-col md:flex-row items-center gap-[15px] md:gap-[60px]">
            <Image
                src={ stars.blackOutlined }
                alt=""
                className="mx-auto md:mx-0 md:w-[200px] md:h-[200px]"
            />
            <div className="flex flex-col md:flex-row gap-[6px]">
                <CoursesFeature
                    label="Разнообразный формат занятий"
                    description="Онлайн занятия, интенсивы, круглые столы - все, чтобы сделать обучение разнообразным и более продуктивным!"
                />
                <CoursesFeature
                    label="Удобное расписание"
                    description="Учиться с нами удобнее, так как все лекции и вебинары доступны в записи для прослушивания в удобное время."
                />
                <CoursesFeature
                    label="Крутые преподаватели"
                    description="Преподаватлями курсов являются призерыи победители различных этапов олимпиад разного уровня"
                />
            </div>
        </Subsection>
    </Section>;
}
