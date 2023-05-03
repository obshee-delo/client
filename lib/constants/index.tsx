import { NavigationLinkProps } from "@components//layout/Header/Navigation/NavigationLink";


export const navigationLinks: NavigationLinkProps[] = [
    {
        label: 'Главная',
        url: '/'
    },
    {
        label: 'О нас',
        url: '/about'
    },
    {
        label: 'Курсы',
        url: '/courses'
    }
];

export const palleteColors = [ 'light', 'dark', 'cyan', 'purple', 'green', 'orange' ];

export const backgroundColorVariants = {
    light: 'bg-light',
    dark: 'bg-dark',
    cyan: 'bg-cyan',
    orange: 'bg-orange',
    purple: 'bg-purple',
    green: 'bg-green'
};

export const backgroundColorOnHoverVariants = {
    light: 'hover:bg-light',
    dark: 'hover:bg-dark',
    cyan: 'hover:bg-cyan',
    orange: 'hover:bg-orange',
    purple: 'hover:bg-purple',
    green: 'hover:bg-green'
};

export const courseCategoryLabels = {
    social: 'Обществознание',
    law: 'Право',
    history: 'История',
    russian: 'Русский язык',
    literature: 'Литература',
    biology: 'Биология',
    ecology: 'Экология',
    geography: 'География'
};

export const courseProgressStatusLabels = {
    planned: 'Обучение не началось',
    started: 'Идёт обучение',
    finished: 'Обучение завершено'
};
