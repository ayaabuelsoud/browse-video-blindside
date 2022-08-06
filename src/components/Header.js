import React from 'react';
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const loggedIn = currentUser ? true : false;
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("currentUser")
        return navigate("/");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className='container'>
                    <Link to={"/"}>
                        <img src="/images/BlindSideLOGO.PNG" className="navbar-brand"
                            alt='BlindSide logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {loggedIn ? (
                                [
                                    <li key={0} className="nav-item active">
                                        <Link className="nav-link" to="/">Overview<span className="sr-only">(current)</span></Link>
                                    </li>,
                                    <li key={1} className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {currentUser.userName}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <button className="dropdown-item btn btn-warning" onClick={() => { logOut() }} type="button">LOG OUT</button>

                                        </div>
                                    </li>]) : ([<li key={0} className="nav-item">
                                        <Link className="mb-sm-2 p-2 mr-2 nav-link btn btn-warning" to="/login">LOG IN</Link>
                                    </li>,
                                    <li key={1} className="nav-item">
                                        <Link className="mb-sm-2 p-2 mr-2 nav-link btn btn-warning" to="/register">SIGN UP</Link>
                                    </li>])}
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Header;