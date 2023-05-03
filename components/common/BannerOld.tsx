'use client';

import { gradients } from "public/backgrounds";
import Marquee from "react-fast-marquee";


export interface BannerSubjectsScrollElementProps {
    label: string
}

export interface BannerStatsBlockProps {
    label: string,
    description: string
}

export function BannerSubjectScrollElement({ label }: BannerSubjectsScrollElementProps) {
    return <div
        key={ label } 
        className="py-2 px-5 mx-[6px] md:mx-[15px] border-dark border-[1px] rounded-full font-semibold"
    >
        { label }
    </div>
}

export function BannerStatsBlock({ label, description }: BannerStatsBlockProps) {
    return <div className="flex flex-col p-[10px] md:py-[20px] md:px-[25px] md:w-full md:h-full border-dark border-[1px] rounded-[10px] overflow-clip">
        <div className="w-full text-[28px] md:text-[48px] font-semibold leading-[34px] md:leading-[58px]">
            { label }
        </div>
        <div className="w-full text-[14px] leading-[17px]">
            { description }
        </div>
    </div>
}

export function BannerStatsBlockPlaceholder() {
    return <div className="w-full h-full"/>;
}

export default function Banner() {
    return <div className={
        `flex flex-col lg:items-center h-screen pt-[63px] md:pt-[101px] bg-cover bg-center`
    } style={{
        backgroundImage: `url('${ gradients.main.src }')`
    }}>
        <div className="w-full lg:w-layout h-full relative">
            <div className="flex h-full flex-col py-[50px] px-[15px] md:pt-[100px]">
                <div className="flex flex-col text-[8.5vw] md:text-[66px]">
                    <span>
                        Подготовка к
                    </span>
                    <span>
                        олимпиадами и ЕГЭ -
                    </span>
                </div>
                <span className="text-[11vw] md:text-[84px] leading-[11vw] md:leading-[84px] font-bold">
                    это общее дело
                </span>
            </div>
            <div className={
                `absolute w-full px-[15px] md:p-0 md:h-[calc(100%-100px)] md:w-[60%]
                grid grid-cols-2 md:grid-cols-3 left-full translate-x-[-100%]
                translate-y-[calc(-100%)] md:translate-y-[calc(-100%-30px)]`
            }> 
                <BannerStatsBlockPlaceholder/>
                <div className="hidden md:block"><BannerStatsBlockPlaceholder/></div>
                <BannerStatsBlock
                    label="190+"
                    description="призеров и победителей регионального этапа Всероссийской Олимпиады Школьников"
                />
                <div className="hidden md:block"><BannerStatsBlockPlaceholder/></div>
                <BannerStatsBlock
                    label="7"
                    description="призеров заключительного этапа Всероссийской Олимпиады Школьников"
                />
                <BannerStatsBlock
                    label="60+"
                    description="дипломантов перечневых олимпиад в олимпиадном сезоне"
                />
                <BannerStatsBlock
                    label="1"
                    description="абсолютный победитель заключительного этапа Всероссийской Олимпиады Школьников"
                />
                <BannerStatsBlock
                    label="1"
                    description="победитель заключительного этапа Всероссийской Олимпиады Школьников"
                />
                <div className="hidden md:block"><BannerStatsBlockPlaceholder/></div>
            </div>
        </div>
        <Marquee className="w-full flex py-[30px] items-center overflow-hidden z-0" speed={ 50 }>
            <BannerSubjectScrollElement label="Право"/>
            <BannerSubjectScrollElement label="Обществознание"/>
            <BannerSubjectScrollElement label="История"/>
            <BannerSubjectScrollElement label="Русский язык"/>
            <BannerSubjectScrollElement label="Литература"/>
            <BannerSubjectScrollElement label="Биология"/>
            <BannerSubjectScrollElement label="Экология"/>
            <BannerSubjectScrollElement label="География"/>
        </Marquee>
    </div>;
}