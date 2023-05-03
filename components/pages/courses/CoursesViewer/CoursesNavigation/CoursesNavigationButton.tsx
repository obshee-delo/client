import CoursesViewerContext from "contexts/pages/courses/viewer";
import { useContext } from "react";
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import { CourseCategory } from "lib/types";


export interface CoursesNavigationButtonProps {
    categoryId: CourseCategory,
    label: string
}

export default function CoursesNavigationButton({ categoryId, label }: CoursesNavigationButtonProps) {
    const { currentCategory, setCurrentCategory } = useContext(CoursesViewerContext);
    
    return <SwiperSlide
        onClick={ () => setCurrentCategory(categoryId) }
        className={ `w-fit py-[6px] px-5 border-dark border-[1px] rounded-full font-medium cursor-pointer transition-colors duration-100 ${ currentCategory == categoryId && 'bg-orange border-transparent' }`}
    >
        { label }
    </SwiperSlide>;
}

CoursesNavigationButton.displayName = 'SwiperSlide';
