import { Router } from 'express';
import FoodController from '../controllers/foodController.js';

const foodRouter = Router();

const foods = new FoodController();

foodRouter.get('/', (req, res) => foods.getAllFoods(req, res));

export default foodRouter;
