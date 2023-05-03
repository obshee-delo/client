import Banner from "@components//common/Banner";
import BannerHeading from "@components//common/Banner/BannerHeading";
import Button from "@components//common/Button";
import SectionContainer from "@components//common/Section/SectionContainer";
import { Layout } from "@components//layout";
import CoursesFeatures from "@components//pages/courses/CoursesFeatures";
import CoursesViewer from "@components//pages/courses/CoursesViewer";
import StrapiApi from "lib/api/strapi";
import { formatDaysRange } from "lib/helpers";
import { redirect } from "next/navigation";


export interface CoursePageParams {
    params: {
        id: string
    }
}

export default async function CoursePage({ params: { id } }: CoursePageParams) {
    const courses = await StrapiApi.courses.getAll({
        populate: 'deep',
        filters: {
            shortName: { $eq: id }
        }
    });

    if (!courses.collection.length) redirect('/');

    const course = courses.collection[0];

    return <Layout header footer headerOverlaysContent>
        <Banner route={[ 'Главная', `Курсы и интенсивы по ${courses.collection[0]?.category?.dative}` ]}>
            <BannerHeading>
                <div className="flex flex-col gap-[30px] md:gap-[60px]">
                    <div className="flex flex-col gap-[30px]">
                        <span>
                            <b>{ formatDaysRange(course.startDate, course.endDate) }</b>
                        </span>
                        <span>{ course.displayName }</span>
                    </div>
                    <Button className="text-[18px] md:w-[300px] md:h-[72px]">Приобрести</Button>
                </div>
            </BannerHeading>
        </Banner>
        <SectionContainer>
            <CoursesFeatures/>
        </SectionContainer>
    </Layout>
}
