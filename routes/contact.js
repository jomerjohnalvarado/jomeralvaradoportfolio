import express from 'express';
import { validateContact, handleValidationErrors } from '../middleware/validation.js';
import { submitContact } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', validateContact, handleValidationErrors, submitContact);

export default router;