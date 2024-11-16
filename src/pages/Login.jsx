import React from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/register-login.css";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();
    
    return (
        <div class="flex center column full-height">
            <h1>Welcome Back!</h1>
            <div class="flex column center start-form">
                <input type="text" placeholder="Username" class="rounded" id="username" required/>
                <input type="email" placeholder="Email" class="rounded" id="email" required/>
                <input type="password" placeholder="Password" class="rounded" id="password" required/>
                <button class="filled-btn login" id="login" 
                    onClick={() => {
                        navigate("/transactions");
                    }}
                >Login</button>
            </div>
        </div>
    );
};

export default Login;