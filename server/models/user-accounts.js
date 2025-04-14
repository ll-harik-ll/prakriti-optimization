import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema ({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true } // Stored as hashed
},{
    timestamps: {
        createdAt: 'date_created',
        updatedAt: 'date_updated'
    }
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});

const Users = mongoose.model('user_accounts', UserSchema, 'user_accounts');
export default Users;