import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars:[]
};
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:{}
})

const create = createAsyncThunk(
    'create',
    async (car)=>{
        const {data} = await carService.create(car)
        return data
    }

);

const {reducer:carReducer, actions} = carSlice;

const carActions ={
    create
};

export {
    carReducer,
    carActions
}