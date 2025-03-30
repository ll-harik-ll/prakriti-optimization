import express from 'express';
import CORS_MIDDLEWARE from './config/cors';
import connectDB from './config/db';
import PORT from './config/port';

const app = express();

// Setting Up Middleware
app.use(CORS_MIDDLEWARE);
app.use(express.json());

// Connecting Mongoose
connectDB();

// Starting Server
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
