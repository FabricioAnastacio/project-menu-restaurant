import { Router } from 'express';
import foodRouter from './foods.routes.js';
import ingRouter from './ingredients.routes.js';
import drinksRouter from './drinks.routes.js';

const router = Router();

router.use('/food', foodRouter);
router.use('/ingredients', ingRouter);
router.use('/drink', drinksRouter);

export default router;
