import { Router } from 'express';
import foodRouter from './foods.routes.js';

const router = Router();

router.use('/food', foodRouter);

export default router;
