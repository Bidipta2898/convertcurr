import React, {Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import google from './google'
import './App.css'
import Login from './Login'
import Error from './Error'
import CurrencyRow from './CurrencyRow'
import Form from './Form'
import FormSuccess from './FormSuccess'
import Forgot from './Forgot'
import LogForm from './LogForm'



export class App extends Component{
  

          responseGoogle=(response)=>{
            console.log(response);
            console.log(response.profileObj);

          }

         

render()
{
  return(
    
  
  <>
  <Switch>
    <Route exact path='/' component={LogForm}></Route>
    <Route exact path='/signup' component={Form}></Route>
    <Route exact path='/google' component={google}></Route>
    <Route exact path='/login' component={LogForm}></Route>
    <Route exact path='/FormSuccess' component={FormSuccess}></Route>
    <Route exact path='/forgot' component={Forgot}></Route>
  

    

    <Route component={Error}/>
  </Switch>
  <div className="container">
  {/*<h1>Convert</h1>
  <CurrencyRow/>
  <div className="equals">=</div>
  <CurrencyRow/>
  */}
  
  </div>
   {/*<GoogleLogin 
    clientId="1025189291179-csdacs688sge8d40haeemjaammq7622v.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
    />*/ } 
    
    
</>
    
  )
}
}
export default App;