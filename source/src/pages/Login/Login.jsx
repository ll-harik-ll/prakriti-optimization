/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../services/account-service';
import "./styles.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        try {
            const result = await loginUser(username, password);

            if (result.ok)
                navigate("/Layout/Dashboard");
            else 
                console.error(`Login Failed: ${result.message || 'Unknown Error'}`);
        } catch (error) {
            console.error(`Login Failed: ${error.message}`);
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
