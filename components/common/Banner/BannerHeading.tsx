import { ReactNode } from "react";


export interface BannerHeadingProps {
    children: ReactNode
}

export default function BannerHeading({ children }: BannerHeadingProps) {
    return <span className="text-4xl md:text-7xl">{ children }</span>;
}
