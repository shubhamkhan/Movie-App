import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:1337/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });

        const data = res.json();

        if(res.status === 200 && data) {
            console.log("Login Sucessful");
            navigate("/");
        } else {
            console.log("Invalid Credentials");
        }

    }

    return (
        <div className='container col-3'>
            <div className="main_div">
                <div className="box">
                    <h1>Login Form</h1>
                    <hr/>
                    <form method='POST'>
                    <div className="input-box">
                        <input type="text" name="email" id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="Password">Password</label>
                    </div>
                    <input type="submit" value="LOGIN" onClick={loginUser} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
