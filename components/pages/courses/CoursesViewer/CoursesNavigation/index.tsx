import { Swiper } from "swiper/react";
import 'swiper/swiper.min.css';
import CoursesNavigationButton from "./CoursesNavigationButton";
import Subsection from "@components//common/Section/Subsection";


export default function CoursesNavigation() {
    return <Subsection>
        <Swiper
            spaceBetween={ 15 }
            slidesPerView="auto"
            className="w-full md:mx-auto md:max-w-layout"
            observer
        >
            <CoursesNavigationButton categoryId="social" label="Обществознание"/>
            <CoursesNavigationButton categoryId="russian" label="Русский Язык"/>
            <CoursesNavigationButton categoryId="literature" label="Литература"/>
            <CoursesNavigationButton categoryId="law" label="Право"/>
            <CoursesNavigationButton categoryId="history" label="История"/>
            <CoursesNavigationButton categoryId="geography" label="География"/>
            <CoursesNavigationButton categoryId="ecology" label="Экология"/>
            <CoursesNavigationButton categoryId="biology" label="Биология"/>
        </Swiper>
    </Subsection>;
}
