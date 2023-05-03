'use client';

import { FiX, FiMenu } from "react-icons/fi";
import NavigationLink from "./NavigationLink";
import { useContext } from "react";
import Button from "@components//common/Button";
import OverlayContext from "contexts/overlay";
import { navigationLinks } from "lib/constants";


export function NavigationMenuButton() {
    const {
        changeOverlayVisibility,
        setOverlayModal
    } = useContext(OverlayContext);

    const openMenu = () => {
        changeOverlayVisibility(true);
        setOverlayModal(<NavigationMenu/>);
    }

    return <FiMenu size="24px" className="block md:hidden" onClick={ openMenu }/>;
}

export function NavigationMenuCloseButton() {
    const {
        changeOverlayVisibility,
        setOverlayModal
    } = useContext(OverlayContext);

    const closeMenu = () => {
        changeOverlayVisibility(false);
        setOverlayModal(null)
    }

    return <Button onClick={ closeMenu }>
        <FiX size="24px" className="fill-light"/>
        Скрыть
    </Button>;
}

export default function NavigationMenu() {
    return <div className={
        `relative mt-auto w-full bg-light p-[15px] rounded-[10px]
        flex flex-col gap-[15px] transition-all duration-300 animate-[modalMoveIn_300ms_ease]`
    }>
        { navigationLinks.map(link =>
            <Button key={ link.label } url={ link.url } style="light">{ link.label }</Button>
        )}
        <NavigationMenuCloseButton/>
    </div>;
}
