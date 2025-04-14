import session from 'express-session';
import { MONGO_STORE } from './db.js';
import dotenv from 'dotenv';

dotenv.config();
const SESSION_SECRET = process.env.SESSION_SECRET;

const SESSION_MIDDLEWARE = async () => {
    console.log('Initializing session middleware...');
    const STORE = await MONGO_STORE();
    console.log('Store resolved, setting up session middleware...');
    
    return session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: STORE,
        cookie: {
            maxAge: 3*60*60*1000, // hrs * min * sec * ms
            sameSite: 'lax',
            httpOnly: true,
            secure: false
        }
    });
};

export default SESSION_MIDDLEWARE;