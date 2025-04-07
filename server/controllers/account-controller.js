import Users from '../models/user-accounts';
import bcrypt from 'bcrypt';

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if ( await Users.findOne({ username })) {
            return res.status(409).json({ message: 'Username already taken' });
        }

        const newUser = new Users({ username, password });
        await newUser.save();

        res.status(201).json({ message: 'User successfully created!' });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server error during user registration.' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await Users.findOne({ username });
        if (!existingUser) {
            return res.status(401).json({ message: 'Username does not exist' });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect Password' });
        }

        req.session.userID = existingUser._id;
        req.session.username = existingUser.username;

        res.status(200).json({ message: 'Login Successful!' });
    } catch (error) {
        console.error('Error during sign-in: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const logoutUser = (req, res) => {
    req.session.destroy(error => {
        if (error) {
            console.error('Logout error:', error);
            return res.status(500).json({ message: 'Could not log out.' });
        }

        res.clearCookie('connect.sid');
        res.status(200).json({ message: 'Logged out successfully.' });
    });
};

export { registerUser, loginUser, logoutUser };