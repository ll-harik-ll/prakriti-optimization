import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/account-service';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const result = await logoutUser();
    
            if (result.ok)
                navigate('/login');
            else
                console.error(`Logout Failed: ${result.message || 'Unknown Error'}`);
        } catch (error) {
            console.error('Network Error : ${error.message}');
        }
    };

    return (
        <nav className='bg-teal-600 text-zinc-400 p-4'>
            <div className='flex justify-between items-center'>
                <Link to='/' className='text-lg font-bold'>Home</Link>
                <button onClick={ () => setIsOpen(!isOpen) } className='text-zinc-400 font-bold w-fit'>
                    { isOpen ? '^' : '…'}
                </button>
            </div>

            { isOpen && (
                <div className='flex flex-col gap-2 mt-2'>
                    <Link to='/Layout/dashboard' onClick={ () => setIsOpen(false)} className='bg-sky-300 text-blue-200 w-fit'>Dashboard</Link>
                    <Link to='/Layout/Start' onClick={ () => setIsOpen(false)} className='bg-sky-300 text-blue-200 w-fit'>Test Prakriti</Link>
                    <button to='/login' onClick={ () => handleLogout() } className='bg-pink-950 text-blue-200 w-fit'>Logout</button>
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
