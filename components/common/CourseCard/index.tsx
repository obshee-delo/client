import CourseCardDetail from "./CourseCardDetail";
import Image from "next/image";
import { stars } from "public/icons";
import { backgroundColorVariants, courseProgressStatusLabels } from "lib/constants";
import { UserCourseCompletionCertificate } from "lib/api/strapi/services/models/users/types/components";
import { formatDaysRange, formatDuration, formatMonth } from "lib/helpers";
import { Course } from "lib/api/strapi/services/models/courses/types";
import { Category } from "lib/api/strapi/services/models/categories/types";
import { PaletteColor } from "lib/types";
import Link from "next/link";


export interface CourseCardProps {
    shortName: string,
    displayName: string,
    description: string,
    category: string,
    backgroundColor: PaletteColor,
    minimalPrice?: number,
    daysRange?: {
        startDate: string,
        endDate: string,
    }
    progress?: {
        status: 'planned' | 'started' | 'finished',
        percents: number,
        points?: number
    },
    redirectToClass?: boolean
}

export default function CourseCard({
    shortName,
    displayName,
    description,
    category,
    backgroundColor,
    minimalPrice,
    daysRange,
    progress,
    redirectToClass
}: CourseCardProps) {
    const DaysRangeDetail = () => {
        if (!daysRange) return null;

        return <CourseCardDetail label="Дни обучения">
            { formatDaysRange(daysRange.startDate, daysRange.endDate) }
        </CourseCardDetail>;
    }

    const DurationDetail = () => {
        if (!daysRange) return null;

        return <CourseCardDetail label="Продолжительность">
            { formatDuration(daysRange.startDate, daysRange.endDate) } мес.
        </CourseCardDetail>;
    }

    const MinimalPriceDetail = () => {
        if (!minimalPrice) return null;

        return <CourseCardDetail label="Стоймость">
            { `от ${minimalPrice} руб.` }
        </CourseCardDetail>;
    }

    const StatusDetail = () => {
        if (!progress) return null;

        return <CourseCardDetail label="Статус">
            { courseProgressStatusLabels[progress.status] }
        </CourseCardDetail>;
    }

    const ProgressDetail = () => {
        if (!progress) return null;

        return <CourseCardDetail label="Статус">
            { progress.percents }
        </CourseCardDetail>;
    }

    const PointsDetail = () => {
        if (!progress) return null;

        return <CourseCardDetail label="Статус">
            { progress.percents }
        </CourseCardDetail>;
    }

    return <Link
        href={ `${ redirectToClass ? '/my' : '' }/courses/${category}/${shortName}` }
        className={ `relative w-full rounded-[30px] border-transparent border-[1px] ${ backgroundColorVariants[backgroundColor] } ${ backgroundColor == 'dark' && 'text-light hover:text-dark' } hover:bg-light hover:border-dark hover:border-opacity-20 transition-colors duration-300` }
    >
        <div className={ `p-[24px] flex flex-col gap-[15px] md:gap-[30px]` }>
            <div className="flex flex-col gap-[15px]">
                <span className="text-xl font-semibold">{ displayName }</span>
                <span>{ description }</span>
            </div>
            <div className={ `h-[1px] w-full ${ backgroundColor == 'dark' ? 'bg-light' : 'bg-dark' }` }></div>
            <div className="flex flex-col gap-[15px] md:justify-center">
                { <DaysRangeDetail/> }
                { <DurationDetail/> }
                { <MinimalPriceDetail/> }
                { <StatusDetail/> }
                { <ProgressDetail/> }
                { <PointsDetail/> }
            </div>
        </div>
        <Image
            src={ stars.spikyWhite }
            alt=""
            className={ `absolute h-[300px] w-[300px] top-full translate-y-[-75%] translate-x-[-75%] left-full opacity-10` }
        />
    </Link>;
}
