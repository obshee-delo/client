import { UserCourseSubscription } from "./components";


export type User = {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    birthday: string,
    phoneNumber: string,
    subscriptions: UserCourseSubscription
};