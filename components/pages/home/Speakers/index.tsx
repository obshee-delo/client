'use client';

import { SpeakersContext } from "contexts/pages/home/speakers";
import { speakers } from "public/photos";
import { useState } from "react";
import { Swiper as SwiperClass } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/swiper.min.css';
import Speaker from "./Speaker";
import SpeakerButton from "./SpeakerButton";
import Section from "@components//common/Section";
import { PaletteColor } from "lib/types";


const speakersBackgroundColors = [
    'purple',
    'orange',
    'cyan',
    'purple',
    'orange',
    'cyan'
];

export default function Speakers() {
    const [ currentSpeakerIndex, _setCurrentSpeakerIndex ] = useState(0);

    const [ swiper, setSwiper ] = useState<SwiperClass>(null as any);

    const setCurrentSpeakerIndex = (index: number) => {
        swiper.slideTo(index);
        _setCurrentSpeakerIndex(index);
    }

    const navigationSlides = Object.values(speakers.circled).map((photo, i) =>
        <SpeakerButton
            key={ i }
            index={ i }
            photo={ photo }
            backgroundColor={ speakersBackgroundColors[i] as PaletteColor }
        />
    );

    return <SpeakersContext.Provider value={{
        currentSpeakerIndex, setCurrentSpeakerIndex
    }}>
        <Section label="Спикеры, выступавшие у нас">
            <Swiper
                onSwiper={ setSwiper }
                spaceBetween={ 30 }
                slidesPerView={ 1 }
                className="px-[15px] pt-[16px] mt-[-16px] w-full md:mx-auto md:max-w-layout"
                observer
            >
                <Speaker
                    name="Михаил Гельфанд"
                    details={[
                        'Член Европейской Академии',
                        'Вице-президент по биомедицинским исследованиям Сколковского института науки и технологий'
                    ]}
                    photo={ speakers.vertical.speaker1 }
                    desktopPhoto={ speakers.horizontal.speaker1 }
                />
                <Speaker
                    name="Владимир Гельман"
                    details={[
                        'Профессор политологии ЕУСПб',
                        'Один из самых известных и цитируемых российских политологов'
                    ]}
                    photo={ speakers.vertical.speaker2 }
                    desktopPhoto={ speakers.horizontal.speaker2 }
                />
                <Speaker
                    name="Сергей Гуриев"
                    details={[
                        'Провост Science Po',
                    ]}
                    photo={ speakers.vertical.speaker3 }
                    desktopPhoto={ speakers.horizontal.speaker3 }
                />
                <Speaker
                    name="Бранко Миланович"
                    details={[
                        'Профессор Городского университета Нью-Йорка Ведущий экономист Всемирного банка',
                    ]}
                    photo={ speakers.vertical.speaker4 }
                    desktopPhoto={ speakers.horizontal.speaker4 }
                />
                <Speaker
                    name="Юлия Вымятнина"
                    details={[
                        'Декан экономического факультета ЕУСПб',
                    ]}
                    photo={ speakers.vertical.speaker5 }
                    desktopPhoto={ speakers.horizontal.speaker5 }
                />
                <Speaker
                    name="Олег Ицхоки"
                    details={[
                        'Профессор Калифорнийского университета в Лос-Анджелесе',
                        'Обладатель премии Джона Бейтса Кларка'
                    ]}
                    photo={ speakers.vertical.speaker6 }
                    desktopPhoto={ speakers.horizontal.speaker6 }
                />
            </Swiper>
            <Swiper
                spaceBetween={ 15 }
                slidesPerView="auto"
                className="px-[15px] pt-[15px] w-full lg:hidden"
                observer
            >
                { navigationSlides }
            </Swiper>
            <div className="w-full hidden mx-auto max-w-layout lg:flex justify-between px-[15px] pt-[30px]">
                { navigationSlides }
            </div>
        </Section>;
    </SpeakersContext.Provider>
}
