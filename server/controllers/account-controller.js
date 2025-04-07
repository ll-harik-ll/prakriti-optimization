import Users from '../models/user-accounts';

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
}

const loginUser = async (req, res) => {
    
}
export { registerUser };