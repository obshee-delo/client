import { Course } from "../../courses/types";


export type UserCourseCompletionCertificate = {
    points: number
};

export type UserCourseSubscription = {
    id: number,
    purchaseDate: string,
    months: number,
    materialsAccess: boolean,
    course?: Course,
    completionCertificate: UserCourseCompletionCertificate
};
