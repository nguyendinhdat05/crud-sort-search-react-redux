import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getSongs = createAsyncThunk(
    'get/getSongs',
    async () => {
        let res = await axios.get('http://localhost:8080/api/songs');
        return res.data
    }
);
export const addSong = createAsyncThunk(
    'add/Songs',
    async (data) => {
        await axios.post('http://localhost:8080/api/songs', data)
        return data
    }
)
export const deleteSong = createAsyncThunk(
    'delete/Song',
    async (id) => {
      await axios.delete(`http://localhost:8080/api/songs/${id}`)
        return  id
    }
)
export const editSong = createAsyncThunk(
    'edit/Song',
    async ({id , value}) =>{
        await axios.put(`http://localhost:8080/api/songs/${id}`,value)
    }
)
export const searchSong = createAsyncThunk(
    'search/Song',
    async (data)=>{
return data

    }
)