import React from 'react'
import configDB from "../../../config/config.json";

function Footer() {
    return (
        <footer className="bg-color text-white">
            <div className="container">
                <div className="row">
                    <div className="text-center">&copy; {configDB.APP_NAME} 2021. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
