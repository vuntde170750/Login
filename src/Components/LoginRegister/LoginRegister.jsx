import React, { useState } from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const registerLink = (e) => {
        e.preventDefault();
        setAction(' active');
        setShowForgotPassword(false);
    };

    const loginLink = (e) => {
        e.preventDefault();
        setAction('');
        setShowForgotPassword(false);
    };

    const forgotPasswordLink = (e) => {
        e.preventDefault();
        setShowForgotPassword(true);
    };

    const responseGoogle = (response) => {
        console.log(response);
        // Handle Google login success
    };

    // const responseFacebook = (response) => {
    //     console.log(response);
    //     // Handle Facebook login success
    // };

    return (
        <div className={'wrapper' + action}>
            <div className={`form-box login ${showForgotPassword ? 'hide' : ''}`}>
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required/>
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required/>
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <button className="link-button" onClick={forgotPasswordLink}>Forgot password?</button>
                    </div>
                    <button type="submit">Login</button>
                    <div className="social-login">
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="google-login-button">
                                    Login with Google
                                </button>
                            )}
                        />
                        {/* <FacebookLogin
                            appId="YOUR_FACEBOOK_APP_ID"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className="facebook-login-button">
                                    Login with Facebook
                                </button>
                            )}
                        /> */}
                    </div>
                    <div className="register-link">
                        <p>Don't have an account? <button className="link-button" onClick={registerLink}>Register</button></p>
                    </div>
                </form>
            </div>

            {showForgotPassword && (
                <div className="form-box forgot-password">
                    <form action="">
                        <h1>Reset Password</h1>
                        <div className="input-box">
                            <input type="email" placeholder='Email' required/>
                            <FaEnvelope className='icon' />
                        </div>
                        <button type="submit">Send Reset Link</button>
                            <div className="register-link">
                                <p>Remembered your account? <button className="link-button" onClick={loginLink}>Login</button></p>
                            </div>
                        </form>
                    </div>
                )}

                <div className="form-box register">
                    <form action="">
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required/>
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder='Email' required/>
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' required/>
                            <FaLock className='icon' />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" /> I agree to the terms & conditions</label>
                        </div>
                        <button type="submit">Register</button>
                        <div className="register-link">
                            <p>Already have an account? <button className="link-button" onClick={loginLink}>Login</button></p>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    export default LoginRegister;