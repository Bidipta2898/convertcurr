export default function validateInfo(values)
{
    let errors={}
    //whitespace removal in username
    if(!values.username.trim())
    {
        errors.username="Username Required"
    }
    if(values.username!="Admin")
    {
        errors.username="Wrong Username"
    }
    //Email Validation
    if(!values.email)
    {
        errors.email="Email Required"
    } else if(!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email="Invalid Email "
    }
    //password validation
    if(!values.password)
    {
        errors.password="Password Required"
    }
    else if(values.password.length<6)
    {
        errors.password="Password needs 6 or more characters"
    }
    else if(values.password!="Admin1")
    {
        errors.password="Incorrect"
    }
    //confirm password validation
    if(!values.password2)
    {
        errors.password2="Password Required"
    }
    else if(values.password2!=values.password){
        errors.password2="Password do not match"

    }
    return errors

}
