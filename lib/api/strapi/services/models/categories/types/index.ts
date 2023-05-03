import { PaletteColor } from "lib/types";
import { Course } from "../../courses/types";


export type Category = {
    id: number,
    shortName: string,
    singular: string,
    dative: string,
    displayColor: PaletteColor,
    courses: Course[]
};
