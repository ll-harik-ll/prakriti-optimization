import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';

// Loading env Variables
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

async function CONNECT_DB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connection To mongoDB has been established.');
    } catch (err) {
        console.error('mongoDB Connection Error: ', err);
    }
}

const MONGO_STORE = async () => MongoStore.create({
    client: mongoose.connection.getClient(),
    collectionName: 'sessions'
});

export { CONNECT_DB, MONGO_STORE };