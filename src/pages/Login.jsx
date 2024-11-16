import React, {useState} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () =>{
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState("");
    const [error, setError] = useState("");
    
    return (
        <div className="flex center column full-height">
            <h1>Welcome Back!</h1>
            <div className="flex column center start-form">
                <input type="text" placeholder="Username" className="rounded" id="username" required 
                    onChange={(e)=>{
                        setLoginForm((prev)=>{
                            return{
                                ...prev,
                                username: e.target.value,
                            }
                        });
                }}/>
                <input type="email" placeholder="Email" className="rounded" id="email" required 
                onChange={(e)=>{
                    setLoginForm((prev)=>{
                        return{
                            ...prev,
                            email: e.target.value,
                        }
                    });
                }}/>
                <input type="password" placeholder="Password" className="rounded" id="password" required 
                onChange={(e)=>{
                    setLoginForm((prev)=>{
                        return{
                            ...prev,
                            password: e.target.value,
                        }
                    });
                }}/>
                <button className="filled-btn login" id="login"
                    onClick={() => {
                        setError("");
                        const data = new FormData();
                        data.append("username", loginForm.username);
                        data.append("email", loginForm.email);
                        data.append("password", loginForm.password);
                        axios.post("http://localhost/FSW-SE-Factory/APIs/login.php", data).then((res)=>{
                            localStorage.setItem("userId", res.data.user.id);
                            navigate("/transactions");
                        }).catch((error) =>{
                            setError(error.response.data.status);
                        })
                    }}
                >Login</button>
                {error && <p>{error}</p>}
            </div>

        </div>
    );
};

export default Login;