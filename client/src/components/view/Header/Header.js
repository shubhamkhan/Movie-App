import logo from '../../../logo.svg';
import React, { useState } from 'react'
import configDB from '../../../config/config.json';
import { Link } from 'react-router-dom';
import light from '../../images/light.svg';
import dark from '../../images/dark.svg';
import './Header.css';

const Header = () => {
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
        <nav className="app-bg-primary app-text-primary">
            <div className="container d-flex flex-wrap">
                <p className="navbar-brand mt-2">
                    <img src={logo} alt='Brand Logo' width="32" height="32" className="pt-1 d-inline-block align-text-top"/>
                    {configDB.APP_NAME}
                </p>
                <ul className="nav me-auto mt-1">
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
                    <li className="nav-item mt-2">
                        <p className="app-text-primary input-group mb-3">
                            <input type="text" id="search" className="form-control btn-outline-light" placeholder="Search movie" aria-label="Search movie" aria-describedby="button-addon2" />
                            <button className="btn btn-light" type="button" id="button-addon2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </p>
                    </li>
                </ul>
                <ul className="nav mt-2">
                    {/* <li className="nav-item mt-2">
                        <p className="app-text-primary">
                            <button className="btn btn-sm btn-danger mx-1">LOG OUT</button>
                        </p>
                    </li> */}
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
                    <li className="nav-item mt-2">
                        <p className="app-text-primary">
                            <button type="button" onClick={toggleSwitch} className="btn btn-sm btn-light rounded-circle mx-1">
                                <img src={currentTheme} alt=""/>
                            </button>
                        </p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
