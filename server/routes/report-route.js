import express from 'express';
import { SaveReport, GetAllReports } from '../controllers/report-controller.js';
import checkAuthMiddleware from '../middleware/auth-middleware.js';

const router = express.Router();

router.post('/save-report', checkAuthMiddleware, SaveReport);
router.get('/reports', checkAuthMiddleware, GetAllReports);

//router.get('/reports/:id', GetReportByID);

export default router;