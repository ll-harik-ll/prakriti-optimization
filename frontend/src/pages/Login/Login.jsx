/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/login",
                { username, password },
                { withCredentials: true }
            );
            
            navigate("/Dashboard");
        } catch (err) {
            console.error("Login failed:",err.message);
        }
    };
    

    return (
        <>
            <div className ="login page">
                <div className ="logincard">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button> 
                </div>
            </div>
        </>
    );
}
export default Login;
