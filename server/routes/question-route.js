import express from 'express';
import GetAllQuestions from '../controllers/question-controller.js';

const router = express.Router();
router.get('/questions', GetAllQuestions);

export default router;