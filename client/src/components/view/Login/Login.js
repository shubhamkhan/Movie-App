import React from 'react'
import './Login.css';

const Login = () => {
    return (
        <div className='container col-3'>
            <div className="main_div">
                <div className="box">
                    <h1>Login Form</h1>
                    <hr/>
                    <form action="">
                    <div className="input-box">
                        <input type="text" name="email" id="name" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-box">
                        <input type="password" name="password" id="name" required />
                        <label htmlFor="Password">Password</label>
                    </div>
                    <input type="submit" value="LOGIN" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
