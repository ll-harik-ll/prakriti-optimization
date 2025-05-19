import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../services/account-service';

const Protected = ({ children }) => {
    const navigate = useNavigate();
    const [authentication, setAuthentication] = useState(false);

    useEffect(() => {
        const verify = async () => {
            const auth = await checkAuth();
            setAuthentication(auth);
            if (!auth )
                navigate('/login');
        }

        verify();
    }, [navigate]);

    return authentication ? children : null;
};

export default Protected;