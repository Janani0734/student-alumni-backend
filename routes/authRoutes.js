import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/referrals', protect, authorizeRoles('Alumni'), (req, res) => {
    res.json({ message: 'Access granted. Welcome to the exclusive Alumni referral panel.' });
});

export default router;