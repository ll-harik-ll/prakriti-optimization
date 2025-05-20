import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cardClass = "flex flex-col justify-center items-center w-[30%] min-w-[300px] h-[70vh] p-8 rounded-[40px] border-2 border-black text-orange-700 bg-transparent shadow-[100px_100px_100px_rgba(181,78,22,0.1)] animate-fadeIn backdrop-blur-md";
const inputClass = "w-[90%] p-3 my-2 border border-[#a8c66c] rounded-full text-black focus:outline-none focus:ring-2 focus:ring-[#e6b980] focus:shadow-lg transition-all duration-300 bg-transparent";
const buttonClass = "w-1/2 mt-4 px-4 py-2 rounded-full bg-[#8c5319] text-white hover:scale-125 hover:shadow-lg hover:text-black transition-all duration-300 cursor-pointer";

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://localhost:5000/api/register", formData);
            alert("Signup successful!");
            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.error || "Error signing up");
        }
    };

  return (
    <div className ="signup page flex items-center justify-center h-screen bg-gradient-to-br from-[#a8c66c] to-[#e6b980] font-[Poppins] overflow-hidden">
        <form onSubmit={handleSubmit} className={cardClass}>
            <h2 className="text-[40px] text-[#211104] font-[verdana]">Signup</h2>
            <input
                type="text" 
                name="username" 
                placeholder="Userame" 
                onChange={handleChange} 
                required 
                className={inputClass}
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                onChange={handleChange} 
                required 
                className={inputClass}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                onChange={handleChange} 
                required 
                className={inputClass}
            />
            <button type="submit" className={buttonClass}>
                Signup
            </button>
        </form>  
    </div>
  );
};

export default Signup;
