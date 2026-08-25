import { Router } from 'express';
import FoodController from '../controllers/foodController.js';

const foodRouter = Router();

const foods = new FoodController();

foodRouter.get('/', (req, res) => foods.getAllFoods(req, res));
foodRouter.get('/:id', (req, res) => foods.getById(req, res));
foodRouter.get('/group/:group', (req, res) => foods.getByGroup(req, res));

export default foodRouter;
