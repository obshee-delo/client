'use client';

import { NavigationBar } from "./Navigation";
import UserTab, { UserTabProps } from './UserTab';
import Image from "next/image";
import { logo } from "public/branding";
import { NavigationMenuButton } from "./Navigation/NavigationMenu";
import { useCallback, useEffect, useRef, useState } from "react";


export type HeaderStyle = 'transparent' | 'opaque';

export type HeaderProps = {
    style: HeaderStyle,
    overlayContent?: boolean,
} & UserTabProps;

export default function Header({
    style,
    authorized,
    profileData,
    overlayContent=false
}: HeaderProps) {
    /**
     * Scroll logic goes down there:
     */

    const [ scrollPosition, defineScrollPosition ] = useState(0);

    const onScroll = useCallback(() => {
        defineScrollPosition(window.scrollY);
    }, []);
  
    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });

        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /**
     * Then height detection logic:
     */

    const targetRef = useRef(null);
    const [ ownHeight, defineOwnHeight ] = useState(0);

    const onResize = useCallback(() => {
        if (targetRef.current)
            defineOwnHeight((targetRef.current as any)?.offsetHeight);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", onResize, { passive: true });

        onResize();

        return () => window.removeEventListener("resize", onResize);
    }, []);

    /**
     * Define styles based on the states above:
     */

    const getBackgroundColor = () => {
        if (style == 'opaque' || scrollPosition >= 1) return 'bg-light';
        return 'bg-transparent';
    }

    return <div
        ref={ targetRef }
        className={
            `${ getBackgroundColor() } ${ overlayContent ? 'fixed' : 'sticky' }
            w-full p-[15px] py-[6px] md:py-[15px] flex justify-center z-40
            transition-colors duration-150`
        }
    >
        <div className="w-layout flex items-center justify-between">
            <div className="flex items-center gap-[30px]">
                <Image
                    src={ logo.black }
                    alt="Общее Дело"
                    className="h-[50px] w-[74px] md:h-[70px] md:w-[109px]"
                />
                <NavigationBar/>
            </div>
            <div className="flex items-center gap-[15px]">
                <UserTab
                    authorized={ authorized }
                    profileData={ profileData }
                />
                <NavigationMenuButton/>
            </div>
        </div>
    </div>;
}
