import React,{useState} from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
import Login from './Login'
import './Form.css'

const Form = () => {
    const [isSubmitted,setISSubmitted]=useState(false)
    function submitForm()
    {
        setISSubmitted(true)
    }
    return (
        <>
       <div className="form-container">
           <span className="close-btn">x</span>
           <div className="form-content-left">
               <img src="img/im.png" className="form-img"></img>
           </div>
           {!isSubmitted ? (<FormSignUp submitForm={submitForm}/>):<FormSuccess/>}
          
       </div>
           
            
      
        </>
    )
}

export default Form
