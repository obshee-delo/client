import Subsection from "@components//common/Section/Subsection";
import CategoryCard from "./CategoryCard";
import Image from 'next/image';
import { stars } from "public/icons";
import Section from "@components//common/Section";


export default function Categories() {
    return <Section
        label="Направления подготовки"
        description="Выберите свой предмет из доступных направлений, чтобы начать прохождение курса."
    >
        <Subsection className={
            `flex flex-col gap-[15px]
            md:grid md:grid-cols-3`
        }>
            <CategoryCard label="Обществознание" color="cyan" url="/courses/social"/>
            <CategoryCard label="Право" color="cyan" url="/courses/law"/>
            <div className="w-auto hidden md:block">
                <Image
                    src={ stars.spikyBlackOutlined }
                    height={ 180 }
                    alt=""
                    className="m-auto animate-[spin_30s_linear_infinite]"
                />
            </div>
            <CategoryCard label="История" color="orange" url="/courses/history"/>
            <CategoryCard label="Русский язык" color="purple" url="/courses/russian"/>
            <CategoryCard label="Литература" color="purple" url="/courses/literature"/>
            <CategoryCard label="География" color="dark" url="/courses/geography"/>
            <CategoryCard label="Биология" color="dark" url="/courses/biology"/>
            <CategoryCard label="Экология" color="dark" url="/courses/ecology"/>
        </Subsection>
    </Section>;
}
