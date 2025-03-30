import cors from 'cors';
import dotenv from 'dotenv';

// Loading env Variables
dotenv.config();
const CORS_ORIGIN = process.env.CORS_ORIGIN;

const CORS_MIDDLEWARE = cors({ origin: "CORS_ORIGIN" });

export default CORS_MIDDLEWARE;