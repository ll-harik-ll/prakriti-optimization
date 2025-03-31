import express from 'express';
import CORS_MIDDLEWARE from './config/cors.js';
import connectDB from './config/db.js';
import PORT from './config/port.js';
import questionRoute from './routes/question-route.js';
import reportRoute from './routes/report-route.js';

const app = express();

// Setting Up Middleware
app.use(CORS_MIDDLEWARE);
app.use(express.json());

// Connecting Mongoose
connectDB();

// Mounting API Routes
app.use('/api', questionRoute);
app.use('/api', reportRoute);

// Starting Server
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
