import RepositoryService from "../../repository";
import { Category } from "./types";


export default class CategoryService extends RepositoryService<Category> {
    constructor() {
        super({
            singular: 'category',
            plural: 'categories'
        });
    }
}
