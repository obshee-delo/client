import { MediaComponent } from "../../types";

export type CourseBlock = {
    id: number,
    displayName: string,
    openDate: string,
    lectures: CourseLecture[]
};

export type CourseLecture = {
    id: number,
    displayName: string,
    openTime: string,
    lectureVideo: MediaComponent,
    lectureMaterials: MediaComponent[],
    lectureVideoUrl?: string
};
