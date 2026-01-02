import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contact.controller.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// POST /api/contact - Submit contact form (rate limited)
router.post('/', contactLimiter, submitContact);

// GET /api/contact - Get all contacts (admin)
router.get('/', getContacts);

export default router;
