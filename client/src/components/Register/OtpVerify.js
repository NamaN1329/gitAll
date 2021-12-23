import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { useHistory } from 'react-router-dom';

 const OtpVerify = () => {
  const history = useHistory();
  const ResendOtp = async() => {
    const resp = fetch('/resendOtp',{
      method : "POST",
       headers : {"Content-Type":"application/json"},
      body : JSON.stringify({ email:"namanthapa1212@gmail.com"}),
    })
    const data = await resp.json();
    if (data.status===200 && !data) {
      alert('Resended OTP');
    }
    else{
      alert('Somthing went worng');
    }
  }
  const [OTP, setOTP] = useState("");
  const button = { width : "10.5em", }
  const input  =  {
    margin: "20px 5px",
    textAlign: "center",
    lineHeight: "60px",
    fontSize: "45px",
    outline: "none",
    width: "20%",
    transition: "all .2s ease-in-out",
    borderRadius: "3px"
  }
const OtpSubmit = async() => {
  const resp = fetch('/otpCheck', {
        method : "POST",
       headers : {"Content-Type":"application/json"},
          body : JSON.stringify({
                                  "email":"namanthapa1212@gmail.com",
                                    "otp": OTP
                                }),
  })
  const data = await resp;
  console.log(data);
  if (data.status===200 && data) {
    console.log('OTP verified')
    history.push('/');
  }
  else{
    console.log('Not Matched')
  }
}
    return (
      <div className="container-fluid">
<div className="row no-gutter">
<div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
<div className="col-md-8 col-lg-6">
<div className="login d-flex align-items-center py-5">
<div className="container">
<div className="row">
<div className="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
{/* <h3 className="login-heading mb-4">New Buddy!</h3> */}

<div id="wrapper">
  <div id="dialog">
    <h3>Please enter the 4-digit verification code we sent via Email:</h3>
    <span>(we want to make sure it's you before we contact our movers)</span>
    <div id="form" style={input}>
    <OTPInput 
      value={OTP}
      onChange={setOTP}
      numInputs={6}
      separator={<span>&nbsp;</span>}
      autoFocus
      OTPLength={6}
      otpType="number"
      disabled={false}
      secure
    />
        <div style={{display : "inline-flex" }}>
        <button className="btn btn-primary btn-embossed" style={button} onClick={OtpSubmit}>Verify</button>
        <button className="btn btn-info btn-embossed" style={button} onClick={ResendOtp}>Resend</button>
      </div>
    </div>
    
    <div>
      Didn't receive the code?<br />
      <a href="#" onClick={ResendOtp}>Send code again</a><br />
      <a href="/">Change Email ID</a>
    </div>
  </div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>

    );
  }
  export default OtpVerify;