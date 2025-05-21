import express from 'express';
import { SaveReport, GetAllReports, GetReportByID } from '../controllers/report-controller.js';
import checkAuthMiddleware from '../middleware/auth-middleware.js';

const router = express.Router();

router.post('/save-report', checkAuthMiddleware, SaveReport);
router.get('/get-all-reports', checkAuthMiddleware, GetAllReports);
router.get('/get-report/:userID', checkAuthMiddleware, GetReportByID);

export default router;