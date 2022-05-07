import {axiosService} from "./axios.service";
import {urls} from "../constatnts";

const episodeService ={
    getAll:(page=1)=>axiosService.get(urls.episode, {params:{page}})
}

export {
    episodeService
}