import express from 'express';
import { SaveReport, GetAllReports } from '../controllers/report-controller.js';

const router = express.Router();

router.post('/save-report', SaveReport);
router.get('/reports', GetAllReports);

//router.get('/reports/:id', GetReportByID);

export default router;