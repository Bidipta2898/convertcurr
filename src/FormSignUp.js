import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import {Route,Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from './Login'
import './Form.css'

const FormSignUp = ({submitForm}) => {

const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate)

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign Up!</h1>
                <div className="form-inputs">
                   <label htmlFor="userName" className="form-lebel">Username:</label>
                       <input id="username" type="text" name="username"className="form-input" 
                       placeholder="Your Username" value={values.username} onChange={handleChange}></input>
                   {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                   <label htmlFor="Email" className="form-lebel"> Email:</label>
                       <input id="email" type="email" name="email"className="form-input" 
                       placeholder="Your Email" value={values.email} onChange={handleChange}></input>
                  {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                   <label htmlFor="password" className="form-lebel"> Password:</label>
                       <input id="password" type="password" name="password"className="form-input" 
                       placeholder="Password" value={values.password} onChange={handleChange}></input>
                  {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                   <label htmlFor="password2" className="form-lebel"> Confirm Password:</label>
                       <input id="password2" type="password" name="password2"className="form-input" 
                       placeholder="Confirm Password" value={values.password2} onChange={handleChange}></input>
                  {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">Register</button>
                <span className="form-input-login">Already Having Acount? Login <Link to={"/Login"}>Here</Link></span>
                <span className="form-input-login">Login with Google<Link to={"/google"}>Here</Link></span>

            </form>
        </div>
    )
}

export default FormSignUp
