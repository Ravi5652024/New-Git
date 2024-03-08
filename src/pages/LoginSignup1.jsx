// import React, { useState } from 'react'
// import './CSS/LoginSignup.css'
// const LoginSignup1=()=>{
//     const [state,setState]=useState("Login")

//     const [formData,setFormData]=useState({
//         username:"",
//         password:"",
//         email:"",
//     })

//     const changeHandler=(e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value})

//     }
//     const login = async () => {
//         console.log("login function executed", formData);
//         try {
//             const response = await fetch('http://localhost:8080/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 localStorage.setItem("auth-token", data.token);
//                 window.location.href = "/";
//             } else {
//                 alert(data.error);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             // alert(data.error);

//         }
//     };

//     const signup = async () => {
//         console.log("signup function executed", formData);
//         try {
//             const response = await fetch('http://localhost:8080/signup', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 alert("Signup successful. Please login.");
//                 window.location.href = "/login";
//             } else {
//                 alert(data.error);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             // alert(data.error);
//         }
//     };


//     return(
//         <div className='loginsignup'>
//             <div className="loginsignup-container">
//                 <h1>{state}</h1>
//                 <div className="loginsignup-fields">
//                     {state==="Sign Up"? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:null}
//                     <input  name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
//                     <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
//                 </div>
//                 <button onClick={()=>{state==="Login"?login():signup()}}>  Continue</button>
//                 {state==="Sign Up"
//                 ? <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:
//                 <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span ></p>}
                
                
     
//             </div>
//         </div>
//     )
// }

// export default LoginSignup1