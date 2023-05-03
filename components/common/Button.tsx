'use client';

import Link from "next/link";
import { ReactNode } from "react";


export type ButtonStyle = 'dark' | 'light';

export interface ButtonProps {
    children: ReactNode,
    style?: ButtonStyle,
    onClick?: Function,
    url?: string,
    className?: string
}

export default function Button({ children, url, className, style="dark", onClick }: ButtonProps) {
    const innerBlockDefaultStyles = 'w-auto h-full flex items-center justify-center py-4 px-5 gap-[10px]';

    return <div
        onClick={ onClick ? () => onClick() : () => {} }
        className={
            `${ className } rounded-[10px] cursor-pointer bg-dark font-medium text-[16px]
            ${ style == 'dark' ? 'text-light hover:text-opacity-80' : 'text-dark bg-opacity-0 hover:bg-opacity-20' }`
        }
    >
        { url ? <Link href={ url } className={ innerBlockDefaultStyles }>
            { children }
        </Link> : <div className={ innerBlockDefaultStyles }>
            { children }
        </div> }
    </div>;
}
