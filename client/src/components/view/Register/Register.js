import React from 'react'
import './Register.css';

const Register = () => {
    return (
        <div className='container col-3 text-white'>
            <div class="main_div">
                <div class="box">
                    <h2>Registration Form</h2>
                    <hr/>
                    <form action="">
                        <div class="input-box">
                            <input type="text" name="name" id="name" autocomplete="off" required />
                            <label for="name">Full Name</label>
                        </div>
                        <div class="input-box">
                            <input type="email" name="email" id="email" autocomplete="off" required />
                            <label for="email">Email</label>
                        </div>
                        <div class="input-box">
                            <input type="text" name="phone" id="phone" autocomplete="off" required />
                            <label for="phone">Mobile No</label>
                        </div>
                        <div class="input-box">
                            <input type="password" name="password" id="password" autocomplete="off" required />
                            <label for="Password">Password</label>
                        </div>
                        <div class="input-box">
                            <input type="password" name="password2" id="password2" autocomplete="off" required />
                            <label for="Password2">Confirm Password</label>
                        </div>
                        <input type="submit" value="JOIN" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
