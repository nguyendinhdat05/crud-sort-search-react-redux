import {createSlice} from "@reduxjs/toolkit";
import {addSong, deleteSong, getSongs, searchSong} from "../../services/songsService";

let initialState = {
    songs :[],
    search : ''
}
let songsSlice = createSlice ({
    name : 'songs',
    initialState,
    extraReducers : builder => {
        builder.addCase(getSongs.fulfilled , (state , action) =>{
           state.songs = action.payload
        }) ;
        builder.addCase(addSong.fulfilled , (state , action) =>{
           state.songs.push(action.payload)
        }) ;
        builder.addCase(deleteSong.fulfilled , (state , action) =>{
           state.songs = state.songs.filter(song => song.id !== action.payload)
        }) ;
        builder.addCase(searchSong.fulfilled , (state , action) =>{
           state.search = action.payload
        })
    }
})

export default songsSlice.reducer