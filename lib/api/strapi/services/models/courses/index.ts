import { formatMonth } from "lib/helpers";
import RepositoryService from "../../repository";
import { Course } from "./types";


export default class CourseService extends RepositoryService<Course> {
    constructor() {
        super({
            singular: 'course',
            plural: 'courses'
        });
    }

    formatDaysRange(entity: Course): string {
        const startDateObject = new Date(entity.startDate);
        const endDateObject = new Date(entity.endDate);

        const startDateFormat = `${startDateObject.getDay()} ${formatMonth(startDateObject.getMonth())}`;
        const endDateFormat = `${endDateObject.getDay()} ${formatMonth(endDateObject.getMonth())}`

        return `${startDateFormat} - ${endDateFormat}`;
    }

    formatDuration(entity: Course): string {
        
    }
}
