import { Router } from 'express';
import IngredientController from '../controllers/ingredientsController.js';

const ingredients = new IngredientController();

const ingRouter = Router();

ingRouter.use('/', (req, res) => ingredients.getAllIngredients(req, res));

export default ingRouter;
