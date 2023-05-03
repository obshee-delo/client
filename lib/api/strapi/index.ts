import CategoryService from "./services/models/categories";
import CourseService from "./services/models/courses";
import UserService from "./services/models/users";
import RestService from "./services/rest";


export default class StrapiApi {
    public static rest = new RestService();
    public static categories = new CategoryService();
    public static courses = new CourseService();
    public static users = new UserService();
}
