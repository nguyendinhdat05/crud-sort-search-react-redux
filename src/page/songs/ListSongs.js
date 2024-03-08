import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {deleteSong, getSongs} from "../../services/songsService";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export default function ListSongs() {
    let dispatch = useDispatch();
    let searchs = useSelector(state => {
        return state.songs.search
    })
    let songs = useSelector(state => {
        if (searchs == '' && state.songs.songs != undefined) {
            return state.songs.songs
        } else {
            const lowerCaseSearch = searchs.toLowerCase();
            return state.songs.songs.filter(i => i.name.toLowerCase().includes(lowerCaseSearch))
        }
    })

    const handleDelete = (id) => {
        dispatch(deleteSong(id))
    }
    useEffect(() => {
        dispatch(getSongs())
    }, [])

    return (
        <>
            <div className={"row"}>
                <div className={"col-12"}>
                    <span>List Song</span>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Listens</th>
                            <th scope="col">Note</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            songs.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.likes}</td>
                                    <td>{item.listens}</td>
                                    <td>{item.note}</td>
                                    <td>
                                        <button onClick={() => {
                                            handleDelete(item.id)
                                        }}>Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button>
                                            <Link to={`edit/${item.id}`}>Edit</Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}