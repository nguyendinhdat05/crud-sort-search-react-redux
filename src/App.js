import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router";
import React from "react";
import Home from "./page/Home";
import ListSongs from "./page/songs/ListSongs";
import AddSongs from "./page/songs/AddSongs";
import EditSongs from "./page/songs/EditSongs";

function App() {
    return (
        <>
            <div className="container-fluid">
            <Routes>
                <Route path={""} element={<Home></Home>}>
                    <Route path={""} element={<ListSongs></ListSongs>}></Route>
                    <Route path={"addSong"} element={<AddSongs></AddSongs>}></Route>
                    <Route path={"edit/:id"} element={<EditSongs></EditSongs>}></Route>
                </Route>
            </Routes>
            </div>
        </>
    );
}

export default App;
