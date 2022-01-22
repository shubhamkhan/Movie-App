import React from 'react'
import './Footer.css';
import configDB from "../../../config/config.json";

const Footer = () => {
    return (
        <footer className="app-bg-primary app-text-primary">
            <div className="container">
                <div className="">
                    <div className="text-center">&copy; {configDB.APP_NAME} 2021. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
