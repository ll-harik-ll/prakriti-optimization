import session from 'express-session';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';

dotenv.config();
SESSION_SECRET = process.env.SESSION_SECRET;