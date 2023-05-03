import Image, { StaticImageData } from "next/image";
import { PaletteColor } from "lib/types";
import { backgroundColorVariants } from "lib/constants";


export interface ReviewProps {
    name: string,
    text: string,
    photo: StaticImageData,
    finishedCourseName: string,
    backgroundColor?: PaletteColor
}

export default function Review(
    { name, photo, finishedCourseName, text, backgroundColor='cyan' }: ReviewProps
) {
    return <div className={ `flex flex-col md:flex-row rounded-[30px]` }>
        <Image
            src={ photo }
            alt=""
            className="w-full md:w-[256px] h-[200px] md:h-auto md:min-h-[300px] rounded-[30px]"
            style={{ objectFit: 'cover' }}
        />
        <div className={ `flex flex-col rounded-[30px] p-[24px] gap-[15px] ${ backgroundColorVariants[backgroundColor] } `}>
            <div className="flex flex-col">
                <span className="text-[22px] font-semibold">{ name }</span>
                <span className="text-[16px] font-medium opacity-70">{ finishedCourseName }</span>
            </div>
            <span className="text-[16px] font-medium">{ text }</span>
        </div>
    </div>;
}
