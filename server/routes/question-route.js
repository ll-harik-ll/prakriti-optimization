import express from 'express';
import { GetAllQuestions, GetOneQuestion } from '../controllers/question-controller.js';

const router = express.Router();

router.get('/questions', GetAllQuestions);
router.get('/questions/:id', GetOneQuestion);

export default router;