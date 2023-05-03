import { HTMLAttributes, ReactNode } from "react"


export type SubsectionProps = {
    children: ReactNode,
    keepPadding?: boolean
} & HTMLAttributes<HTMLDivElement>;

export default function Subsection({ children, className, keepPadding=true }: SubsectionProps) {
    return <div className={
        `md:mx-auto md:max-w-layout md:w-full ${ keepPadding && 'px-[15px]' } ${ className && className }`
    }>
        { children }
    </div>;
}