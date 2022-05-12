import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars:[],
    status:null
};

const create = createAsyncThunk(
    'create',
    async (car)=>{
        const {data} = await carService.create(car)
        return data
    }

);

const getAll = createAsyncThunk(
    'getAll',
    async ()=>{
        const {data} = await carService.getAll()
        return data
    }
)
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:(builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'completed'
                state.cars = action.payload
            })
    })
})



const {reducer:carReducer, actions} = carSlice;

const carActions ={
    create,
    getAll
};

export {
    carReducer,
    carActions
}