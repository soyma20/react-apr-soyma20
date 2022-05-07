import axios from "axios";
import {baseURL} from "../constatnts";

const axiosService = axios.get({baseURL});

export {
    axiosService
}
