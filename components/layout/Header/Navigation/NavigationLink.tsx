import Link from "next/link";
import { HTMLAttributes } from "react";


export type NavigationLinkProps = {
    label: string,
    url: string
} & HTMLAttributes<HTMLDivElement>;

export default function NavigationLink(
    { label, url, className }: NavigationLinkProps
) {
    return <Link href={ url } className={
        `font-medium text-[16px]"
        ${className ? className : ''}`
    }>{ label }</Link>;
}
