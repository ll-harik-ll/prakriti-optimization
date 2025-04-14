import express from 'express';

import CORS_MIDDLEWARE from './config/cors.js';
import SESSION_MIDDLEWARE from './config/sessions.js';
import { CONNECT_DB } from './config/db.js';
import PORT from './config/port.js';

import questionRoute from './routes/question-route.js';
import reportRoute from './routes/report-route.js';
import accountRoute from './routes/account-route.js';

const app = express();

(async () => {
    // Connecting Mongoose
    await CONNECT_DB();

    // Setting Up Middleware
    app.use(CORS_MIDDLEWARE);
    app.use(await SESSION_MIDDLEWARE());
    app.use(express.json());

    // Mounting API Routes
    app.use('/api', questionRoute);
    app.use('/api', reportRoute);
    app.use('/api', accountRoute);

    // Starting Server
    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
})();