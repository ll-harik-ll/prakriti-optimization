import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className='p-4'>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;