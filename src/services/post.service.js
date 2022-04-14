import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getPostsByUserId:(userId)=>axiosService.get(`${urls.posts}?userId=${userId}`)
}

export {
    postService
}