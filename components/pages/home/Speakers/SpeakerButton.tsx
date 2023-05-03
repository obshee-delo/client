import { useContext } from "react";
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import Image, { StaticImageData } from "next/image";
import { SpeakersContext } from "contexts/pages/home/speakers";
import { PaletteColor } from "lib/types";
import { backgroundColorVariants } from "lib/constants";


export interface SpeakerButtonProps {
    index: number,
    photo: StaticImageData,
    backgroundColor: PaletteColor
}

export default function SpeakerButton({ index, photo, backgroundColor }: SpeakerButtonProps) {
    const { currentSpeakerIndex, setCurrentSpeakerIndex } = useContext(SpeakersContext);

    return <SwiperSlide
        className={
            `w-[160px] transition-colors duration-100 cursor-pointer
            rounded-full border-dark border-[1px] border-opacity-20
            ${ currentSpeakerIndex == index && `${ backgroundColorVariants[backgroundColor] } border-transparent` }`
        }
        onClick={ () => setCurrentSpeakerIndex(index) }
    >
        <Image
            src={ photo }
            alt=""
        />
    </SwiperSlide>
}

SpeakerButton.displayName = 'SwiperSlide';
