import React,{Component} from 'react'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom';


export class google extends Component {
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);

      }
      render(){
    return (
        <div className="container">
        <div className="g">
       
 <GoogleLogin 
    clientId="1025189291179-csdacs688sge8d40haeemjaammq7622v.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
    />
   
        </div>
        </div>
    )
}
}
export default google
