/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../services/account-service';

const cardClass = "flex flex-col justify-center items-center w-[30%] min-w-[300px] h-[70vh] p-8 rounded-[40px] border-2 border-black text-orange-700 bg-transparent shadow-[100px_100px_100px_rgba(181,78,22,0.1)] animate-fadeIn backdrop-blur-md";
const inputClass = "w-[90%] p-3 my-2 border border-[#a8c66c] rounded-full text-black focus:outline-none focus:ring-2 focus:ring-[#e6b980] focus:shadow-lg transition-all duration-300 bg-transparent";
const buttonClass = "w-1/2 mt-4 px-4 py-2 rounded-full bg-[#8c5319] text-white hover:scale-125 hover:shadow-lg hover:text-black transition-all duration-300 cursor-pointer";

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
        <div className ="login page flex items-center justify-center h-screen bg-gradient-to-br from-[#a8c66c] to-[#e6b980] font-[Poppins] overflow-hidden">
            <div className ={cardClass}>
                <h2 className="text-[40px] text-[#211104] font-[verdana]">Login</h2>
                <input
                    type="text" 
                    placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    className={inputClass}
                />
                <input
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    className={inputClass}
                />
                <button onClick={handleLogin} className={buttonClass}>
                    Login
                </button> 
            </div>
        </div>
    );
}
export default Login;
