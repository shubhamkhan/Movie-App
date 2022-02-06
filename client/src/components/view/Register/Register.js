import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        user_type: "user",
        email: "",
        phone: "",
        password: "",
        password2: ""
    });

    let key, value;

    const handleInputs = (e) => {
        key = e.target.name;
        value = e.target.value;

        setUser({...user, [key]:value});
    }

    const sendData = async (e) => {
        e.preventDefault();

        const { name, user_type, email, phone, password, password2 } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, user_type, email, phone, password, password2})
        });

        const data = await res.json();
        if(data && res.status === 201) {
            console.log("Successfull Registration" + res.status);
            navigate("/login");
        } else {
            console.log("Invalid Registration"); 
        }
    }
    return (
        <div className='container col-3'>
            <div className="main_div">
                <div className="box">
                    <h2>Registration Form</h2>
                    <hr/>
                    <form method='POST'>
                        <div className="input-box">
                            <input type="text" name="name" value={user.name} onChange={handleInputs} required />
                            <label htmlFor="name">Full Name</label>
                        </div>
                        <div className="input-box">
                            <input type="text" name="email" value={user.email} onChange={handleInputs} required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-box">
                            <input type="text" name="phone" autoComplete="off" value={user.phone} onChange={handleInputs} required />
                            <label htmlFor="phone">Mobile No</label>
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" autoComplete="off" value={user.password} onChange={handleInputs} required />
                            <label htmlFor="Password">Password</label>
                        </div>
                        <div className="input-box">
                            <input type="password" name="password2" autoComplete="off" value={user.password2} onChange={handleInputs} required />
                            <label htmlFor="Password2">Confirm Password</label>
                        </div>
                        <input type="submit" value="JOIN" onClick={sendData}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
