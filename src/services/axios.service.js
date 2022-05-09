import axios from "axios";
import {baseURL} from "../constatnts";

const axiosService = axios.create({baseURL});

export {
    axiosService
}
