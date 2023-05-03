'use client';

import { navigationLinks } from "lib/constants";
import NavigationLink from "./NavigationLink";


export default function NavigationBar() {
    return <div className="hidden md:flex gap-[30px]">
        { navigationLinks.map(link => 
            <NavigationLink
                className={
                    `p-[10px] px-[20px] rounded-[10px] 
                    hover:bg-[rgba(0,0,0,.05)] transition-colors duration-100`
                }
                key={ link.label } { ...link }
            />
        )}
    </div>;
}
