import Banner from "@components//common/Banner";
import BannerHeading from "@components//common/Banner/BannerHeading";
import SectionContainer from "@components//common/Section/SectionContainer";
import { Layout } from "@components//layout";
import CoursesFeatures from "@components//pages/courses/CoursesFeatures";
import CoursesViewer from "@components//pages/courses/CoursesViewer";
import StrapiApi from "lib/api/strapi";
import { redirect } from "next/navigation";


export interface CoursesCategoryParams {
    params: {
        category: string
    }
}

export default async function CoursesCategory({ params: { category } }: CoursesCategoryParams) {
    const courses = await StrapiApi.courses.getAll({
        populate: 'deep',
        filters: {
            category: {
                shortName: { $eq: category }
            }
        }
    });

    if (!courses.collection.length) redirect('/');

    const categoryDativeForm = courses.collection[0]?.category?.dative;

    return <Layout header footer headerOverlaysContent>
        <Banner route={[ 'Главная', `Курсы и интенсивы по ${courses.collection[0]?.category?.dative}` ]}>
            <BannerHeading>Курсы и интенсивы <b>по { categoryDativeForm }</b></BannerHeading>
        </Banner>
        <SectionContainer>
            <CoursesFeatures/>
            <CoursesViewer courses={ courses } category={ category }/>
        </SectionContainer>
    </Layout>
}
