'use client';

import Section from "@components//common/Section";
import CoursesNavigation from "./CoursesNavigation";
import { useState } from "react";
import CoursesViewerContext from "contexts/pages/courses/viewer";
import CoursesList from "../../../common/CoursesList";
import { Course } from "lib/api/strapi/services/models/courses/types";
import { ModelCollection } from "lib/api/strapi/services/repository/types";
import CourseCard from "@components//common/CourseCard";


export interface CoursesViewerProps {
    courses: ModelCollection<Course>,
    category?: string
}

export default function CoursesViewer({ courses, category }: CoursesViewerProps) {
    const [ currentCategory, setCurrentCategory ] = useState<string>(category || 'social');

    const categoryCourses = courses.collection.filter(course => course.category?.shortName == currentCategory);

    return <Section label={ category ? 'Выбери курс или интенсив' : 'Выбери нужное направление' }>
        <CoursesViewerContext.Provider value={{
            currentCategory, setCurrentCategory
        }}>
            { !category && <CoursesNavigation/> }
            <CoursesList>
                { categoryCourses.map((course, i) =>
                    <CourseCard
                        key={ i }
                        shortName={ course.shortName }
                        displayName={ course.displayName }
                        description={ course.description }
                        category={ currentCategory }
                        backgroundColor={ course.category?.displayColor }
                        minimalPrice={ course.monthSubscriptionPrice }
                        daysRange={{
                            startDate: course.startDate,
                            endDate: course.endDate
                        }}
                    />
                ) }
            </CoursesList>
        </CoursesViewerContext.Provider>;
    </Section>;
}
