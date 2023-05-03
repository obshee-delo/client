import { PageContext } from "contexts/page";
import Image from "next/image";
import { gradients } from "public/backgrounds";
import { stars } from "public/icons";
import { Fragment, ReactNode, useContext } from 'react';
import BannerHeading from "./BannerHeading";


interface BannerProps { 
    route: string[],
    children?: ReactNode
}

export default function Banner({ route, children }: BannerProps) {

    const renderRouteMap = () => {
        return route.map((text, i) =>
            <Fragment>
                <span className={ `${ i != route.length - 1 && 'opacity-50' }` }>{ text }</span>
                { i != route.length - 1 && <Image src={ stars.spikyBlack } alt="" className="inline mx-[6px]"/> }
            </Fragment>
        );
    }

    return <div
        className="w-full pt-[62px] md:pt-[100px]"
        style={{
            backgroundImage: `url('${ gradients.main.src }')`,
            backgroundPosition: '0% 50%'
        }}
    >
        <div className="relative md:mx-auto md:max-w-layout md:w-full flex flex-col p-[15px] pb-[30px] md:py-[120px] gap-[24px] md:gap-[60px]">
            <div className="md:absolute top-0 left-0 md:p-[15px]">
                { renderRouteMap() }
            </div>
            { children }
        </div>
    </div>
}
