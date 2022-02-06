import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import defaultPic from '../../images/user.svg';

const About = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const callAboutPage = async () => {
            try{
                const result = await fetch('/about', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });

                if(result.status !== 200) {
                    navigate("/login");
                } else {
                    const data = await result.json();
                    setUserData(data);
                }
    
            } catch(error) {
                console.log(error);
            }
        }
        callAboutPage();
    }, [navigate]);
    

    return (
        <div>
            <h2>About</h2>
            <form method='GET'>
                <div className='row'>
                <div className='row'>
                        <img src={ userData.image ? userData.image : defaultPic } alt={userData.name} />
                    </div>
                    <div className='row'>
                        <span>{userData.name}</span>
                    </div>
                    <div className='row'>
                        <span>{userData.email}</span>
                    </div>
                    <div className='row'>
                        <span>{userData.phone}</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default About
