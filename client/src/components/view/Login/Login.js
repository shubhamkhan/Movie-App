import React from 'react'
import './Login.css';

const Login = () => {
    return (
        <div className='container col-3 text-white'>
            <div class="main_div">
                <div class="box">
                    <h1>Login Form</h1>
                    <hr/>
                    <form action="">
                    <div class="input-box">
                        <input type="email" name="email" id="name" autocomplete="off" required />
                        <label for="email">Email</label>
                    </div>
                    <div class="input-box">
                        <input type="password" name="password" id="name" autocomplete="off" required />
                        <label for="Password">Password</label>
                    </div>
                    <input type="submit" value="LOGIN" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
