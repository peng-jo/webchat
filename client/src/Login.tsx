import React from "react";

const Login = (): JSX.Element => {
  return <div className="page-container">
        <div className="login-form-container shadow">
            <div className="login-form-right-side">
                <div className="top-logo-wrap">
                    
                </div>
                <h1>How does a login system work?</h1>
                <p>In computer security, logging in is the process by which an individual gains access to a computer system by identifying and authenticating themselves.</p>
            </div>
            <div className="login-form-left-side">
                <div className="login-top-wrap">
                    <span>Don't have an account?</span>
                    <button className="create-account-btn shadow-light">Create Profile</button>
                </div>
                <div className="login-input-container">
                    <div className="login-input-wrap input-id">
                        <i className="far fa-envelope"></i>
                        <input placeholder="Email" type="text" />
                    </div>
                    <div className="login-input-wrap input-password">
                        <i className="fas fa-key"></i>
                        <input placeholder="Password"  type="password"/>
                    </div>
                </div>
                <div className="login-btn-wrap">
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </div>
    </div>
};

export default Login;