'use client';

import { illustration } from "public";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import UpcomingCard from './UpcomingCard';
import Section from "@components//common/Section";


export default function Upcoming() {
    return <Section label="Ближайшие курсы">
        <Swiper
            spaceBetween={ 15 }
            slidesPerView="auto"
            className="px-[15px] pt-[16px] mt-[-16px] w-full md:mx-auto md:max-w-layout"
            observer
        >
            {
                [ 1, 1, 1, 1, 1 ].map(() => <UpcomingCard
                    key={ Math.random() }
                    url="/courses/femida"
                    label="Практикум к Фемиде"
                    timeTerms="12.02 – 24.03"
                    daysOfWeek={ "Пн Ср Сб".split(/\s/g) }
                    timeOfDay="19:00"
                    illustration={ illustration.law }
                />)
            }
        </Swiper>
    </Section>;
}
