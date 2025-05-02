import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const res = await axios.post(
                `http://localhost:5000/api/logout`,
                { withCredentials: true }
            );
            navigate('/login');
        } catch (error) {
            console.error(`Login Failed : ${error.message}`);
        }
    };

    return (
        <nav className='bg-teal-600 text-zinc-400 p-4'>
            <div className='flex justify-between items-center'>
                <Link to='/' className='text-lg font-bold'>Home</Link>
                <button onClick={ () => setIsOpen(!isOpen) } className='text-zinc-400 font-bold'>
                    { isOpen ? 'x' : '…'}
                </button>
            </div>

            { isOpen && (
                <div className='flex flex-col gap-2 mt-2'>
                    <Link to='/dashboard' onClick={ () => setIsOpen(false)}>Dashboard</Link>
                    <Link to='/Start' onClick={ () => setIsOpen(false)}>Test Prakriti</Link>
                    <Link to='/login' onClick={ () => handleLogout }>Logout</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

/*
        <>
            <nav className="navbar">
                <div className="navbar-container">
                
                    <input type="checkbox" id="menu-toggle" />

                    <div className="hamburger-lines">
                        <span className="line line1">_</span>
                        <span className="line line2">_</span>
                        <span className="line line3">_</span>
                    </div>

                
                    <ul className="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Details</a></li>
                        <li><a href="#">Test</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

            
                    <h1 className="logo">WELCOME BACK 😊</h1>
                </div>
            </nav>
        </>
*/
