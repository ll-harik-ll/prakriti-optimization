import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/account-service';

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
    
            if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false)
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }
    , []);

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
        <nav
            className={`
                bg-gradient-to-r from-[#a8c66c] to-[#e6b980] px-6 py-4 shadow-md fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className="flex justify-between items-center">
                <Link to='/' className="text-lg font-semibold text-[#4b2e12] hover:underline">
                    Home
                </Link>
                <button onClick={ () => setIsOpen(!isOpen) } className="text-2xl font-bold text-[#8c5319] transition-transform hover:scale-125">
                    { isOpen ? '^' : '…'}
                </button>
            </div>

            <div
                className={`
                    transform transition-all duration-500 ease-in-out overflow-hidden
                    ${isOpen ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 -translate-y-2'}
                `}
            >
                <div className="mt-4 flex flex-col space-y-2 text-[#4b2e12]">
                    <Link to='/Layout/dashboard' onClick={ () => setIsOpen(false)} className="hover:text-[#8c5319] hover:underline">
                        Dashboard
                    </Link>
                    <Link to='/Layout/Start' onClick={ () => setIsOpen(false)} className="hover:text-[#8c5319] hover:underline">
                        Test Prakriti
                    </Link>
                    <button to='/login' onClick={ () => handleLogout() } className="text-left text-[#530303] hover:underline">
                        Logout
                    </button>
                </div>
            </div>
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
