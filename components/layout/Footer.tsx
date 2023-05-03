import Image from "next/image";
import Link from "next/link";
import { logo } from "public/branding";
import { socials } from "public/icons";
import { ReactNode } from "react";


export interface DetailsSectionLinkProps {
    label: string,
    url: string
}

export interface DetailsSectionProps {
    label: string,
    children: ReactNode
}

export function DetailsSectionLink({ label, url }: DetailsSectionLinkProps) {
    return <Link href={ url } className="hover:opacity-75 transition-colors duration-100">{ label }</Link>;
}

export function DetailsSection({ label, children }: DetailsSectionProps) {
    return <div className="flex flex-col gap-[15px]">
        <span className="text-light opacity-50">{ label }</span>
        <div className="flex flex-col gap-[6px]">
            { children }
        </div>
    </div>
}

export default function Footer() {
    return <div className="flex justify-center w-full bg-dark text-light py-[48px] px-[15px]">
        <div className="w-layout relative flex flex-col gap-[60px]">
            <div className="flex flex-col md:flex-row gap-[30px] md:gap-[60px] justify-between">
                <div className="flex flex-col gap-[15px]">
                    <div className="flex gap-[15px] items-center">
                        <Image src={ logo.white } alt="Общее Дело" height={ 50 }/>
                        <span className="text-[24px] font-semibold">Общее Дело</span>
                    </div>
                    Готовьтесь к олимпиадам вместе с нами!
                </div>
                <DetailsSection label="Проект">
                    <DetailsSectionLink label="О нас" url="/about"/>
                    <DetailsSectionLink label="Контакты" url="/contact"/>
                </DetailsSection>
                <DetailsSection label="Соцсети">
                    <DetailsSectionLink label="ВКонтакте" url="/vk"/>
                </DetailsSection>
                <DetailsSection label="Политика">
                    <DetailsSectionLink label="Конфиденциальность" url="/policy"/>
                </DetailsSection>
            </div>
            <div className="w-full flex border-t-light justify-between">
                <span>{ '© 2023 "Общее Дело". Все права защищены.' }</span>
                <div>
                    <Image src={ socials.vkWhite } alt="Паблик ВКонтакте"/>
                </div>
            </div>
        </div>
    </div>;
}
