import express from 'express';
import { GetAllQuestions, GetOneQuestion } from '../controllers/question-controller.js';
import checkAuthMiddleware from '../middleware/auth-middleware.js';

const router = express.Router();

router.get('/questions', checkAuthMiddleware, GetAllQuestions);
router.get('/questions/:id', checkAuthMiddleware, GetOneQuestion);

export default router;