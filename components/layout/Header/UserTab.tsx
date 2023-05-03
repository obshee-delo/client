import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
export interface UserTabProfileData {
    name: string,
    avatarUrl: string
}

export interface UserTabProps {
    authorized: boolean,
    profileData?: UserTabProfileData
}

export const AuthorizeTab: React.FC = () => {
    return <Link href="authorize" className={
        `flex items-center text-[16px] gap-[10px] md:p-[10px] md:px-[20px]
        rounded-[10px] md:hover:bg-[rgba(0,0,0,.05)] transition-colors duration-100`
    }>
        <FiUser size="24px"/>
        <span className="hidden md:block font-medium">Войти</span>
    </Link>;
}

export default function UserTab(
    { authorized, profileData }: UserTabProps
) {
    return authorized ? <>

    </> : <AuthorizeTab/>;
}
