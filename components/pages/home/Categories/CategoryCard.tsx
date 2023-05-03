import Image from 'next/image';
import Link from 'next/link';
import { logo } from 'public/branding';
import { PaletteColor } from 'lib/types';
import { backgroundColorVariants } from 'lib/constants';


export interface CategoryProps {
    label: string,
    color: PaletteColor,
    url: string
}

export default function CategoryCard({ label, color, url }: CategoryProps) {
    return <Link href={ url } className={
        `relative w-full h-[200px] p-[24px] rounded-[30px] ${ backgroundColorVariants[color] }
        ${ color == 'dark' && 'text-light hover:text-dark' }
        border-transparent border-[1px] hover:bg-transparent
        hover:border-dark hover:border-opacity-20 transition-colors duration-300`
    }>
        <span className="text-[22px] font-semibold">{ label }</span>
        <Image
            src={ logo.white }
            alt="Общее Дело"
            className={
                `absolute top-full left-full opacity-50 invert
                translate-x-[calc(-100%-24px)] translate-y-[calc(-100%-24px)]
                ${ color == 'dark' && 'mix-blend-exclusion invert-0' }`
            }
        />
    </Link>;
}
