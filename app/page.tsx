import Banner from "@components//common/BannerOld";
import { Layout } from "@components//layout";
import Section from "@components//common/Section";
import SectionContainer from "@components//common/Section/SectionContainer";
import Upcoming from "@components//pages/home/Upcoming";
import Categories from "@components//pages/home/Categories";
import Projects from "@components//pages/home/Projects";
import Speakers from "@components//pages/home/Speakers";
import Reviews from "@components//pages/home/Reviews";


export default function Home() {
    return <Layout header footer headerOverlaysContent>
        <Banner/>
        <SectionContainer>
            <Upcoming/>
            <Categories/>
            <Projects/>
            <Speakers/>
            <Reviews/>
        </SectionContainer>
    </Layout>;
}
