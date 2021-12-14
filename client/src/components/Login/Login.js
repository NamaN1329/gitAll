import React , {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [email,fieldval] = useState('')
    const inputChange = (e) => {
        fieldval(e.target.value);
    }
    const [password,fieldpass] = useState('')
    const passChange = (e) => {
        fieldpass(e.target.value);
    }

    const signInButton = async(e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        const resp = await fetch('/login', {
            method : "POST",
            headers : {
                "Content-Type" : "application/json", 
            },
            body : JSON.stringify({
                                "email":email,
                                "password":password
                                }),                    
        })
        const data = await resp.json();
        if (resp.status===200 && data) {
            console.log(data)
            alert('Login Successfully');
            history.push('/');
        }
        else{
            alert("Login Failed");
        }
    }
    return (
        <>
          <div className="container-fluid">
<div className="row no-gutter">
<div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
<div className="col-md-8 col-lg-6">
<div className="login d-flex align-items-center py-5">
<div className="container">
<div className="row">
<div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
<h3 className="login-heading mb-4">Welcome back!</h3>
<form>
<div className="form-label-group">
<input type="email" id="inputEmail" name="user" className="form-control" placeholder="Email address"  onChange={inputChange} value={email} />
<label htmlFor="inputEmail">Email/Mobile</label>
</div>

<div className="form-label-group">
<input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" onChange={passChange} value={password} />
<label htmlFor="inputPassword">Password</label>
</div>
{/* <div className="custom-control custom-checkbox mb-3">
<input type="checkbox" className="custom-control-input" id="customCheck1" />
<label className="custom-control-label" htmlfor="customCheck1">Remember password</label>
</div> */}

<div className="custom-control custom-checkbox mb-3">
<input type="checkbox" className="custom-control-input" id="customCheck1" placeholder="Email address"  />
<label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
</div>

<button type="submit" onClick={signInButton} className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign in</button>
<div className="text-center pt-3">
Don’t have an account? <a className="font-weight-bold" href="/signup">Sign Up</a>
</div>
</form>
<hr className="my-4" />
<p className="text-center">LOGIN WITH</p>
<div className="row">
<div className="col pr-2">
<button className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Google</button>
</div>
<div className="col pl-2">
<button className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Facebook</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
        </>        
    )

}

export default Login