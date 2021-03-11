import React from 'react'
import { Link } from 'react-router-dom'
import './Log.css'
const Forgot = () => {
    return (
        <div className="login1">
    <form className="loginForm1" >
        <div className="loginTitle1">
            <h1>Forgot Password</h1>
        </div>
        <label>
            <p>Enter Email</p>
            </label>
            <input type="email" className="input-log"/>
       
        
        <div className="button-submit" >
        <Link to={"/Login"}>
            <button className="button-log" type="submit" >
           
                Login
               
            </button>
            </Link>

        </div>
    </form>
</div>
    )
}

export default Forgot
