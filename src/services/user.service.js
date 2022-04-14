import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll:()=>axiosService.get(urls.users)
}

export {
    userService
}