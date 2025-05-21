import express from 'express';
import { SaveReport, GetAllReports, GetReportByID, GetDosha } from '../controllers/report-controller.js';
import checkAuthMiddleware from '../middleware/auth-middleware.js';

const router = express.Router();

router.post('/save-report', checkAuthMiddleware, SaveReport);
router.get('/get-all-reports', checkAuthMiddleware, GetAllReports);
router.get('/reports', checkAuthMiddleware, GetReportByID);
router.get('/dosha/:prakriti', checkAuthMiddleware, GetDosha);

export default router;