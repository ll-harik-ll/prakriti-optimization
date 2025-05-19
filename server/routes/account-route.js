import express from 'express';
import { registerUser, loginUser, logoutUser, checkAuth } from '../controllers/account-controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/checkAuth', checkAuth);

export default router;