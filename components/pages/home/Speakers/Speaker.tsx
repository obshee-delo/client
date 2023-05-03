import Image, { StaticImageData } from "next/image";
import { stars } from "public/icons";
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';


export interface SpeakerProps {
    name: string,
    details: string[],
    photo: StaticImageData,
    desktopPhoto: StaticImageData
}

export default function Speaker({ name, details, photo, desktopPhoto }: SpeakerProps) {
    return <SwiperSlide className="relative">
        <div className="sm:hidden">
            <Image
                src={ photo }
                alt=""
                className="w-full b"
                unoptimized
            />
        </div>
        <div className="hidden sm:block">
            <Image
                src={ desktopPhoto }
                alt=""
                className="w-full b"
                unoptimized
            />
        </div>
        <div className="absolute top-0 md:top-1/2 md:translate-y-[-50%] left-0 w-full md:w-[45%] p-[15px] md:p-[24px] flex flex-col gap-[15px]">
            <span className="text-[22px] lg:text-[32px] font-semibold">{ name }</span>
            <div className="w-full flex flex-col gap-[6px]">
                { details.map((detail, i) =>
                    <div key={ i } className="w-full flex items-start gap-1">
                        <Image
                            src={ stars.surikenBlack }
                            height={ 24 }
                            alt=""
                            className="md:mt-[5px]"
                        />
                        <span className="flex-1 font-medium text-[18px] lg:text-[22px]">{ detail }</span>
                    </div>
                )}
            </div>
        </div>
    </SwiperSlide>;
}

Speaker.displayName = 'SwiperSlide';
