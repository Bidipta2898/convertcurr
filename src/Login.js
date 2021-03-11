import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
import LForm from './LForm'
import validate from './validateInfo'
import './Form.css'
const Login = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors}=LForm(submitForm,validate)
    
    
    
    return (
        <div className="form-content-right">
    <form className="form"  onSubmit={handleSubmit}>
        <div className="loginTitle1">
            <h1>Login!</h1>
        </div>
        <div className="form-inputs">
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
                 
       </div>
           
            <Link to={"/Forgot"}>Forgot Password?</Link>
      
      <div>
            <button className="btn" type="submit" >Login</button>
            <div></div>
            <span className="form-input-login">New User? Sign Up<Link to={"/signup"}>Here</Link></span>
            </div>

    </form>
    
</div>
      
    )
}

export default Login
