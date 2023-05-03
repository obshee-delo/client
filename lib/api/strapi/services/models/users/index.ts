import RepositoryService from "../../repository";
import { User } from "./types";


export default class UserService extends RepositoryService<User> {
    constructor() {
        super({
            singular: 'course',
            plural: 'courses'
        });
    }
}
