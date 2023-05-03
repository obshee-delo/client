import { createContext } from 'react';
import { CourseCategory } from 'lib/types';


export interface ICoursesViewerContext {
    currentCategory: CourseCategory,
    setCurrentCategory: Function
}

const CoursesViewerContext = createContext<ICoursesViewerContext>({
    currentCategory: 'social',
    setCurrentCategory: (category: CourseCategory) => {}
});

export default CoursesViewerContext;
