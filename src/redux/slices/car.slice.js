import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars:[],
    status:null
};

const createAsync = createAsyncThunk(
    'create',
    async ({car},{dispatch})=>{
        const {data} = await carService.create(car)
        dispatch(create(car:data))
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
    reducers:{
        create:(state, action) => {
            state.cars.push(action.payload.car)
        }
    },
    extraReducers:(builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
    })
})



const {reducer:carReducer, actions:{create}} = carSlice;

const carActions ={
    createAsync,
    getAll
};

export {
    carReducer,
    carActions
}