const logoutUser = async () => {
    try {
        const response = await fetch('https://localhost:5000/api/logout', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' } // note: corrected 'application.json'
        });

        const data = await response.json().catch(() => ({}));
        return { ok: response.ok, status: response.status, message: data.message || null };
    } catch (error) {
        console.error(`Network Error: ${error.message}`);
        return { ok: false, error: error.message };
    }
};

const loginUser = async (username, password) => {
    try {
        const response = await fetch( 'https://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ username, password }),
            credentials: 'include'
        });

        const data = await response.json().catch(() => ({}));
        return { ok: response.ok, status: response.status, message: data.message || null };
    } catch (error) {
        console.error(`Network Error: ${error.message}`);
        return { ok: false, error: error.message };
    }
};

const checkAuth = async () => {
    try {
        const response = await fetch('https://localhost:5000/api/checkAuth', {
            method: 'GET',
            credentials: 'include'
        });

        const data = await response.json().catch(() => ({}));

        return data;
    } catch (error) {
        console.error(`Authentication Failure: ${ error }`);
        return false;
    }
};

export { logoutUser, loginUser, checkAuth };