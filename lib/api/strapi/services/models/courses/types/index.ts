import { Category } from "../../categories/types";
import { CourseBlock } from "./components";


export type Course = {
    id: number,
    shortName: string,
    displayName: string,
    description: string,
    startDate: string,
    endDate: string,
    monthSubscriptionPrice: number,
    twoMonthsSubscriptionPrice: number,
    category: Category,
    blocks: CourseBlock[]
};
