import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchSong} from "../services/songsService";

export default function Navbar(){
    let dispatch = useDispatch()
    return(
        <>
            <div className={'row'}>
                <div className={'col-12'}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'}> Home </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'addSong'}>Add</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <input type="text" onInput={(e)=>{
                              dispatch(searchSong(e.target.value))
                            }}/>
                            <button>Search</button>

                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
