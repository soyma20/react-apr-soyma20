import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    status: null,
    carForUpdate: {}
};

const createAsync = createAsyncThunk(
    'createAsync',
    async (car, {dispatch}) => {
        const {data} = await carService.create(car)
        dispatch(create({car: data}))

    }
);
const deleteById = createAsyncThunk(
    'deleteById',
    async (id, {dispatch}) => {
        await carService.deleteById(id)
        dispatch(deleteCar({id}))
    }
);
const updateById = createAsyncThunk(
    'updateById',
    async ({id, car}, {dispatch}) => {
        await carService.updateById(id, car)
        dispatch(updateCar({id,car}))
    }
);


const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await carService.getAll()
        return data
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        },
        deleteCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index, 1)
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = { ...state.cars[index], ...action.payload.car };
            state.carForUpdate = false;
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
    })
})


const {reducer: carReducer, actions: {create, deleteCar, setCarForUpdate, updateCar}} = carSlice;

const carActions = {
    createAsync,
    getAll,
    deleteById,
    setCarForUpdate,
    updateById
};

export {
    carReducer,
    carActions
}