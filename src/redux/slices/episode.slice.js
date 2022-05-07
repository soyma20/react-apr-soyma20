import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

let initialState ={
    pages:null,
    next:null,
    prev:null,
    episodes:[]
};

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ()=>{
        const {data} = await episodeService.getAll();
        return data
    }
);

const episodeSlice = createSlice({
    name:'episodeSlice',
    initialState,
    extraReducers:(builder  )=>{
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {pages, next, prev, results} = action.payload;
                state.pages=pages;
                state.next = next;
                state.prev = prev;
                state.episodes= results;
            })

    }
});

const {reducer:episodeReducer} = episodeSlice;

const episodeActions = {
    getAll
}

export {
    episodeReducer,
    episodeActions
}