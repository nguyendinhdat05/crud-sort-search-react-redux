import {configureStore} from "@reduxjs/toolkit";
import songsReducer from "./songs/songsSlice";

export let store = configureStore({
    reducer : {
        songs : songsReducer
    }
})