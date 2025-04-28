import cors from 'cors';
import dotenv from 'dotenv';

// Loading env Variables
dotenv.config();
const CORS_ORIGIN = process.env.CORS_ORIGIN;

const CORS_MIDDLEWARE = cors({
    origin: CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
    credentials: true // allows cookies to and fro frontend
});

export default CORS_MIDDLEWARE;