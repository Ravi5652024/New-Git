import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { config } from '../config';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
    const navigate = useNavigate()
    const [state, setState] = useState("Login");
    const [userData, setuserData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const changeHandler = (e) => {
        setuserData({ ...userData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("login function executed", userData);
        const url=config.baseUrl +config.path.LOGIN
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("auth-token", data.token);
                // window.location.href = "/home";
                navigate("/home");
            } else {
                if (data.error) {
                    alert(data.error);
                } else {
                    throw new Error('Login failed');
                }
            }
        } catch (error) {
            console.error('Error:', error.message);
            console.error('Error:', error.message);
        if (error.message === 'Failed to fetch') {
            alert('Failed to connect to the server. Please try again later.');
        } else {
            alert('An error occurred. Please try again later.');
        }
        }
    };



        const signup = async () => {
            console.log("signup function executed", userData);
            const url=config.baseUrl +config.path.SIGNUP
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });
                const data = await response.json();
                if (response.ok) {
                    alert("Signup successful. Please login.");
                    // window.location.href = "/";
                    navigate("/")
                } else {
                        if (data.error) {
                            alert(data.error);
                        } else {
                            throw new Error('Signup failed');
                        }
                }
            } catch (error) {
                console.error('Error:', error);
                if (error.message === 'Failed to fetch') {
                    alert('Failed to connect to the server. Please try again later.');
                } else {
                    alert('An error occurred. Please try again later.');
                }
            }
        };
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? 
                            <input name='username' value={userData.username} onChange={changeHandler} type="text" placeholder='Your Name' />
        
                    : null}

                    <input name='email' value={userData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                    <input name='password' value={userData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={() => {state === "Login" ? login() : signup() }}>  Continue</button>
                {state === "Sign Up" ?
                    <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span></p> :
                    <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span ></p>}
            </div>
        </div>
    );
}

export default LoginSignup;
