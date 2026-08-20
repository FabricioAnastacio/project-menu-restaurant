import { Router } from 'express';
import foodRouter from './foods.routes.js';
import ingRouter from './ingredients.routes.js';

const router = Router();

router.use('/food', foodRouter);
router.use('/ingredients', ingRouter);

export default router;
