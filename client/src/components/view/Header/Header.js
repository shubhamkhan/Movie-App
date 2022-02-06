import logo from '../../../logo.svg';
import React, { useContext, useState } from 'react'
import configDB from '../../../config/config.json';
import { Link } from 'react-router-dom';
import light from '../../images/light.svg';
import dark from '../../images/dark.svg';
import './Header.css';

import { UserContext } from '../../../App';

const Header = () => {
    const { state, dispatch } = useContext(UserContext);
    const RenderMenu = () => {
        if(state) {
            return (
                <>
                <Link to="/logout">
                <li className="nav-item mt-2">
                    <p className="app-text-primary">
                        <button className="btn btn-sm btn-danger mx-1">LOG OUT</button>
                    </p>
                </li>
                </Link>
                </>
            )
        } else {
            return (
                <>
                <Link to="/register">
                <li className="nav-item mt-2">
                    <p className="app-text-primary">
                        <button type="button" className="btn btn-sm btn-warning mx-1">JOIN NOW</button>
                    </p>
                </li>
                </Link>
                <Link to="/login">
                <li className="nav-item mt-2">
                    <p className="app-text-primary">
                        <button type="button" className="btn btn-sm btn-outline-light mx-1">SIGN IN</button>
                    </p>
                </li>
                </Link>
                </>
            )
        }
    }
    const [currentTheme, setCurrentTheme] = useState(dark);

    const toggleSwitch = () => {
        let theme = localStorage.getItem('theme');
        if(theme === 'light'){
            document.documentElement.setAttribute('data-theme', 'dark');
            setCurrentTheme(light);
            localStorage.setItem('theme', 'dark');
        } else if (theme === 'dark'){
            document.documentElement.setAttribute('data-theme', 'light');
            setCurrentTheme(dark);
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            setCurrentTheme(light);
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark app-bg-primary app-text-primary">
            <div className="container-fluid">
            <span className="navbar-brand mb-2">
                <img src={logo} alt='Brand Logo' width="32" height="32" className="d-inline-block align-text-top"/>
                {configDB.APP_NAME}
            </span>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to="/">
                    <li className="nav-item mt-2">
                        <p className="nav-link app-text-primary">Home</p>
                    </li>
                    </Link>
                    <Link to="/about">
                    <li className="nav-item mt-2">
                        <p className="nav-link app-text-primary">About</p>
                    </li>
                    </Link>
                </ul>
                <form className="d-flex">
                    <div className="app-text-primary input-group">
                        <input type="text" id="search" className="form-control btn-sm btn-outline-light" placeholder="Search movie" aria-label="Search movie" aria-describedby="button-addon2" />
                        <button className="btn btn-sm btn-light" type="button" id="button-addon2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                </form>
                <ul className="nav mt-2">
                    <RenderMenu />
                    <li className="nav-item mt-2">
                        <p className="app-text-primary">
                            <button type="button" onClick={toggleSwitch} className="btn btn-sm btn-light rounded-circle mx-1">
                                <img src={currentTheme} alt=""/>
                            </button>
                        </p>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header
