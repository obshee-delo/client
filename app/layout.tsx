'use client';

import './globals.css';
import { ReactNode, useState } from 'react'
import Head from 'next/head';
import OverlayContext from 'contexts/overlay';


export const metadata = {
    title: 'Общее Дело'
}

export interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [ overlayVisible, changeOverlayVisibility ] = useState(false);
    const [ overlayModal, setOverlayModal ] = useState(null);

    return <OverlayContext.Provider value={{
        overlayVisible, changeOverlayVisibility,
        overlayModal, setOverlayModal
    }}>
        <html lang="en" className={ overlayVisible ? 'overflow-hidden' : '' }>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                { children }
            </body>
        </html>
    </OverlayContext.Provider>;
}
