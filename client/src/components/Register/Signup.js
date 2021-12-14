import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../../vendor/select2/css/select2.min.css"
import '../../css/osahan.css';
import "../../vendor/bootstrap/css/bootstrap.min.css"
const SignUp = () => {
    const history = useHistory();
    const [user,setUser] = useState({
                            name:"",
                            email:"",
                            password:"",
                            
                        });
let value = "";
let name = "";
const handleInput = (e) => {
    value = e.target.value
    name = e.target.name
    setUser({ ...user, [name]:value})
}

const Register = async(e) => {
e.preventDefault();
var suButton = e.target;
console.log(suButton);
suButton.innerHTML ="<i class='fa fa-spinner fa-spin '></i>  Processing Order";
const {name, email, phone, password} = user;
const resp = await fetch('/register', {
    method : "POST",
    headers : {
        "Content-Type" : "application/json", 
    },
    body : JSON.stringify({
         name, email, phone, password })              
});
const data = await resp.json();
console.log(resp)
if (resp.status===200 && data) {
    console.log(data)
    alert('Login Successfully');
    history.push('/');
}
else if(resp.status===403){
    alert("Login Failed");
    suButton.innerHTML ="Submit";
}
}

const verify = () => {

}
const reSend = () => {

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
                                    <h3 className="login-heading mb-4">New Buddy!</h3>
                                    <form method="POST">
                                        <div className="form-label-group">
                                            <input type="text" id="inputName" name="name" className="form-control" placeholder="Enter Your Name" onChange={handleInput}  value={user.name} />
                                            <label htmlFor="inputName">Name</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" onChange={handleInput} value={user.email} />
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="number" id="inputPhone" name="phone" className="form-control" placeholder="Mobile Number" onChange={handleInput}  value={user.phone}/>
                                            <label htmlFor="inputPhone">Mobile</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" onChange={handleInput} value={user.password} />
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>
                                        {/* <div className="form-label-group mb-4">
                                            <input type="text" id="ptext" className="form-control" placeholder="Promocode" />
                                            <label htmlFor="ptext">Promocode</label>
                                        </div> */}
                                        <button onClick={Register} data-loading-text="<i class='fa fa-spinner fa-spin '></i>  Processing Order" className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</button>
                                        <div className="text-center pt-3">
                                            Already have an Account? <a className="font-weight-bold" href="/login">Sign In</a>
                                        </div>
                                    </form>
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

export default SignUp