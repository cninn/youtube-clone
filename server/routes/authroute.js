import express from 'express';
import { signin, signup } from '../controllers/auth.js';

const router = express.Router();
//!Create user
router.post('/signup',signup);
//!Sign in
router.post('/signin',signin);
//! google sign
router.post('/google')
export default router;