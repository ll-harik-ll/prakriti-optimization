import React from "react";
import { Link } from "react-router-dom";
const Account = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#a8c66c] to-[#e6b980] overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center h-screen w-full">
                    <h1 className="text-4xl font-semibold mb-4 text-white drop-shadow-md">
                        Welcome to Prakruti Parikshan
                    </h1>
                    <p className="text-lg text-white mb-8">
                        Discover your body type based on Ayurvedic principles.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/login" className="bg-[#5f8b4c] text-black no-underline px-6 py-2 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-500">
                            Login
                        </Link>
                        <Link to="/signup" className="bg-[#5f8b4c] text-black no-underline px-6 py-2 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-500">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Account;
