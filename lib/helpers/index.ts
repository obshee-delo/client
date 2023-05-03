const monthsMap = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря'
} as { [key: number]: string }


export const formatMonth = (monthNumber: number) => monthsMap[monthNumber];

export const formatDaysRange = (startDate: string, endDate: string): string => {
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);

    const startDateFormat = `${startDateObject.getDay()} ${formatMonth(startDateObject.getMonth())}`;
    const endDateFormat = `${endDateObject.getDay()} ${formatMonth(endDateObject.getMonth())}`

    return `${startDateFormat} - ${endDateFormat}`;
}

export const formatDuration = (startDate: string, endDate: string): string => {
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);

    const deltaMilliseconds = endDateObject.getTime() - startDateObject.getTime();

    return Math.floor(deltaMilliseconds / 1000 / 60 / 60 / 24 / 30) + ' мес.';
}
