import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Loading env Variables
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

async function connectDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connection To mongoDB has been established.');
    } catch (err) {
        console.error('mongoDB Connection Error: ', err);
    }
}

export default connectDB;