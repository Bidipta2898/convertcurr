import React,{useState} from 'react'
import FormSuccess from './FormSuccess'
import Login from './Login'
import './Form.css'

const LogForm = () => {
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
           {!isSubmitted ? (<Login submitForm={submitForm}/>):<FormSuccess/>}
          
       </div>
           
            
      
        </>
    )
}

export default LogForm
