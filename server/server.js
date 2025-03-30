import express from 'express';
import CORS_MIDDLEWARE from './config/cors.js';
import connectDB from './config/db.js';
import PORT from './config/port.js';
import questionRoute from './routes/question-route.js';

const app = express();

// Setting Up Middleware
app.use(CORS_MIDDLEWARE);
app.use(express.json());

// Connecting Mongoose
connectDB();

app.use('/api', questionRoute);

// Starting Server
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
