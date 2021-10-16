import React , {useState} from 'react';
import '../css/login.css';
const Login = () => {
    const [container, setContainer] = useState("container")
    const signInButton = () => {
        setContainer("container");
    }
    const signUpButton = () => {
         setContainer("container right-panel-active");
        }
    return (
        <>
            <div className={container} id="container">
                <div class="form-container sign-up-container">
                    <form action="inserteddd" method="post" >   
                        <h1>Create Account</h1>
                        <div class="social-container"></div>
                        <span>or use your email for registration</span>
                        <input type="file"  name="photo" id="photo"/>Add PHOTO<br/>
                        <input type="text"  placeholder="Name" name="name" required=""  />
                        <input type="email"  placeholder="Email" name="email" required />
                        <input type="password"  placeholder="Password" name="password" required />
                        <button  type="submit" onClick={signUpButton} >Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="/" method="POST" >
                        <h1>Sign in</h1>
                        <div class="social-container">
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" name="email" />
                        <input type="password" placeholder="Password" name="pass" />
                        <a href="/">Forgot your password?</a>
                        <button onClick={signInButton} type="button" >Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={signInButton} class="ghost" type="button" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={signUpButton} class="ghost" type="button" id="signUp" >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>        
    )

}

export default Login