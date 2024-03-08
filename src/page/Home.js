import Navbar from "../components/Navbar";
import {Outlet} from "react-router";

export default function Home(){
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="row" id={"body"}>
                <div className={"col-2"}>
                    <span>Sort Likes</span>
                </div>
                <div className={"col-10"}>
                    <Outlet></Outlet>
                </div>
            </div>

        </>
    )
}