import { Router } from 'express';
import { submitContact, getContacts } from '../controllers/contact.controller.js';

const router = Router();

// POST /api/contact - Submit contact form
router.post('/', submitContact);

// GET /api/contact - Get all contacts (admin)
router.get('/', getContacts);

export default router;
