import { ReactNode, useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Overlay from "./Overlay";
import { HeaderStyle } from "./Header";


interface LayoutProps {
    children: ReactNode,
    header?: boolean,
    footer?: boolean,
    headerOverlaysContent?: boolean,
    headerDefaultStyle?: HeaderStyle,
}

export const Layout: React.FC<LayoutProps> = ({
    header,
    footer,
    headerOverlaysContent,
    children,
    headerDefaultStyle = 'transparent',
}: LayoutProps) => {
    return <div className="w-full flex flex-col text-dark">
        { header && <Header style={ headerDefaultStyle } authorized={ false } overlayContent={ headerOverlaysContent }/> }
        { children }
        { footer && <Footer/> }
        <Overlay/>
    </div>
}
