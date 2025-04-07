import session from 'express-session';
import { MONGO_STORE } from './db';
import dotenv from 'dotenv';

dotenv.config();
SESSION_SECRET = process.env.SESSION_SECRET;

const SESSION_MIDDLEWARE = session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: await MONGO_STORE,
    cookie: {
        maxAge: 3*60*60*1000, // hrs * min * sec * ms
        sameSite: 'lax',
        httpOnly: true,
        secure: false
    }
});

export default SESSION_MIDDLEWARE;