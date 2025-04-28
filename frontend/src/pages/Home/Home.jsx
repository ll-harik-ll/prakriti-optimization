import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
const Home = () => {
    return (
        <>
            <div className="home">
                <div className="homecard">
                    <h1>Welcome to Prakruti Parikshan</h1>
                    <p>Discover your body type based on Ayurvedic principles.</p>
                    <button style={{backgroundColor:"rgb(95, 139, 76)"}}>
                        <Link to="/login" style={{color:"black", textDecoration:"none"}}>
                            Login
                        </Link>
                    </button>
                    <button style={{backgroundColor:"rgb(95, 139, 76)"}}>
                        <Link to="/signup"style={{color:"black", textDecoration:"none"}}>
                            Signup
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}
export default Home;
