'use client';

import Image, { StaticImageData } from 'next/image';
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import Link from 'next/link';
import { PaletteColor } from 'lib/types';
import { backgroundColorOnHoverVariants } from 'lib/constants';


export interface UpcomingCardProps {
    url: string,
    label: string,
    timeOfDay: string,
    timeTerms: string,
    daysOfWeek: string[],
    illustration: StaticImageData,
    backgroundOnHover?: PaletteColor
}

export default function UpcomingCard(
    { url, label, timeTerms, daysOfWeek,
      timeOfDay, illustration, backgroundOnHover='cyan' }: UpcomingCardProps
) {
    return <SwiperSlide
        className={
            `w-[230px] h-auto rounded-[30px]
            border-dark border-[1px] border-opacity-20 ${ backgroundColorOnHoverVariants[backgroundOnHover] } }
            hover:border-transparent hover:translate-y-[-16px] transition-all duration-300`
        }
    >
        <Link
            href={ url }
            className="w-full h-full flex flex-col p-[24px] gap-[15px] md:gap-[24px]"
        >
            <div className="flex flex-col">
            <span className="text-[18px] font-medium">
                { timeTerms }
            </span>
            <span className="text-[14px] font-medium">
                { daysOfWeek.join(', ') } | { timeOfDay }
            </span>
            </div>
            <span className="w-full text-[22px] font-semibold">
                { label }
            </span>
            <Image
                src={ illustration }
                alt={ label }
                height={ 200 }
                className="mt-auto"
            />
        </Link>
        
    </SwiperSlide>;
}

UpcomingCard.displayName = 'SwiperSlider';
