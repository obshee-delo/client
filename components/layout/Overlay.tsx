'use client';

import OverlayContext from "contexts/overlay";
import { useContext } from "react";


export default function Overlay() {
    const { overlayVisible, overlayModal } = useContext(OverlayContext);

    return <div
        className={
            `fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex p-[15px]
            ${ overlayVisible ? 'block' : 'hidden' } z-50`
        }
    >
        { overlayModal }
    </div>
}
