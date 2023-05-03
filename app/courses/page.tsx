import Banner from "@components//common/Banner";
import BannerHeading from "@components//common/Banner/BannerHeading";
import SectionContainer from "@components//common/Section/SectionContainer";
import { Layout } from "@components//layout";
import CoursesFeatures from "@components//pages/courses/CoursesFeatures";
import CoursesViewer from '../../components/pages/courses/CoursesViewer/index';
import StrapiApi from "lib/api/strapi";


export default async function Courses() {
    const courses = await StrapiApi.courses.getAll({ populate: 'deep' });

    return <Layout header footer headerOverlaysContent>
        <Banner route={[ 'Главная', 'Курсы и интенсивы по всем направлениям' ]}>
            <BannerHeading>Курсы и интенсивы <b>по всем направлениям</b></BannerHeading>
        </Banner>
        <SectionContainer>
            <CoursesFeatures/>
            <CoursesViewer courses={ courses }/>
        </SectionContainer>
    </Layout>
}
